import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Modal from 'react-modal'

import { Colors, Fonts } from '../../Themes'

import Header from '../../Components/Header'
import NumberInput from '../../Components/NumberInput'
import GenderInput from '../../Components/GenderInput'
import Button from '../../Components/Button'

import { updateAge, updateWeight, updateHeight, updateGender } from './actions'

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.8)'
Modal.setAppElement('#root')

class Bmi extends Component {
  constructor (props: any) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleModal () {
    this.setState({ open: !this.state.open })
  }

  setAge = (age) => {
    this.props.updateAge(age)
  }

  setWeight = (weight) => {
    this.props.updateWeight(weight)
  }

  setHeight = (height) => {
    this.props.updateHeight(height)
  }

  setGender = (gender) => {
    this.props.updateGender(gender)
  }

  renderModal = () => {
    const { weight, height } = this.props.bmi
    const meters = height / 100
    const bmi = weight / (meters * meters)
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    }

    return (
      <Modal
        isOpen={this.state.open}
        style={customStyles}
        onRequestClose={this.closeModal}
        contentLabel='Example Modal'
      >
        <View style={styles.modal}>
          <Text style={styles.modalHeader}>Your BMI is:</Text>
          <Text style={styles.bmi}>{bmi.toFixed(2)}</Text>
          <Button text='Close' marginTop={30} onPress={() => this.toggleModal()} />
        </View>
      </Modal>
    )
  }

  render () {
    const { age, weight, height, gender } = this.props.bmi
    return (
      <View style={styles.container}>
        <Header title='BMI Calculator' />
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={styles.content}>
            <View style={styles.inner}>
              <View style={styles.wrap}>
                <View style={styles.cards}>
                  <NumberInput min={1} max={99} label='Age' placeholder='' value={age} onChangeValue={this.setAge} />
                  <NumberInput
                    min={10}
                    max={200}
                    label='Weight'
                    placeholder='kg'
                    value={weight}
                    onChangeValue={this.setWeight}
                  />
                  <NumberInput
                    min={20}
                    max={250}
                    label='Height'
                    placeholder='cm'
                    value={height}
                    onChangeValue={this.setHeight}
                  />
                </View>
                <View style={[styles.cards, styles.genderCards]}>
                  <GenderInput value={gender} onChangeValue={this.setGender} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button text='Calculate' onPress={() => this.toggleModal()} />
        </View>
        {this.renderModal()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: Colors.header
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  inner: {
    display: 'block'
  },
  wrap: {
    maxWidth: 768,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingHorizontal: 15
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  genderCards: {
    justifyContent: 'center'
  },
  card: {
    width: 200,
    borderRadius: 3,
    backgroundColor: Colors.contrast,
    overflow: 'hidden',
    marginHorizontal: 15,
    marginBottom: 50
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  },
  modal: {
    paddingHorizontal: 50
  },
  modalHeader: {
    ...Fonts.style.h1,
    color: Colors.contrastText,
    textAlign: 'center',
    marginBottom: 15
  },
  bmi: {
    ...Fonts.style.inputNumber,
    color: Colors.contrastText,
    textAlign: 'center'
  }
})

const mapStateToProps = (state) => ({ bmi: state.bmi })

export default connect(mapStateToProps, {
  updateAge,
  updateWeight,
  updateHeight,
  updateGender
})(Bmi)
