import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Modal from 'react-modal'

import { Colors, Fonts } from '../../Themes'

import Header from '../../Components/Header'
import NumberInput from '../../Components/NumberInput'
import GenderInput from '../../Components/GenderInput'
import Button from '../../Components/Button'

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.8)'

class Calculator extends Component {
  constructor (props: any) {
    super(props)
    this.state = {
      age: 18,
      weight: 160,
      height: 70,
      gender: '',
      open: false
    }
  }

  calculate = () => {
    this.openModal()
  }

  toggleModal () {
    this.setState({ open: !this.state.open })
  }

  setAge = (age) => {
    this.setState({ age })
  }

  setWeight = (weight) => {
    this.setState({ weight })
  }

  setHeight = (height) => {
    this.setState({ height })
  }

  setGender = (gender) => {
    this.setState({ gender })
  }

  renderModal = () => {
    const bmi = 703 * (this.state.weight / (this.state.height * this.state.height))
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
    return (
      <View style={styles.container}>
        <Header title='BMI Calculator' />
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={styles.content}>
            <View style={styles.inner}>
              <View style={styles.wrap}>
                <View style={styles.cards}>
                  <NumberInput
                    min={1}
                    max={99}
                    label='Age'
                    placeholder=''
                    value={this.state.age}
                    onChangeValue={this.setAge}
                  />
                  <NumberInput
                    min={10}
                    max={300}
                    label='Weight'
                    placeholder='pounds'
                    value={this.state.weight}
                    onChangeValue={this.setWeight}
                  />
                  <NumberInput
                    min={50}
                    max={250}
                    label='Height'
                    placeholder='inches'
                    value={this.state.height}
                    onChangeValue={this.setHeight}
                  />
                </View>
                <View style={[styles.cards, styles.genderCards]}>
                  <GenderInput value={this.state.gender} onChangeValue={this.setGender} />
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

export default Calculator
