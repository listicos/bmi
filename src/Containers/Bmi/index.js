import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { Colors } from '../../Themes'
import Header from '../../Components/Header'
import NumberInput from '../../Components/NumberInput'
import GenderInput from '../../Components/GenderInput'
import Button from '../../Components/Button'
import { updateAge, updateWeight, updateHeight, updateGender } from './actions'
import Result from './result'

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.8)'
Modal.setAppElement('#root')
class Bmi extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleModal = () => {
    this.setState({ open: !this.state.open })
  }

  render () {
    const { age, weight, height, gender } = this.props.bmi

    return (
      <View style={styles.container}>
        <Header title='BMI Calculator' />
        <ScrollView contentContainerStyle={styles.flexContent}>
          <View style={styles.content}>
            <View style={styles.inner}>
              <View style={styles.wrap}>
                <View style={styles.cards}>
                  <NumberInput
                    min={1}
                    max={99}
                    label='Age'
                    placeholder=''
                    value={age}
                    onChangeValue={this.props.updateAge}
                  />
                  <NumberInput
                    min={10}
                    max={200}
                    label='Weight'
                    placeholder='kg'
                    value={weight}
                    onChangeValue={this.props.updateWeight}
                  />
                  <NumberInput
                    min={20}
                    max={250}
                    label='Height'
                    placeholder='cm'
                    value={height}
                    onChangeValue={this.props.updateHeight}
                  />
                </View>
                <View style={[styles.cards, styles.genderCards]}>
                  <GenderInput value={gender} onChangeValue={this.props.updateGender} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button text='Calculate' onPress={this.toggleModal} />
        </View>
        <Result isOpen={this.state.open} onRequestClose={this.toggleModal} bmi={this.props.bmi} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  flexContent: {
    flex: 1
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
  }
})

const mapStateToProps = (state) => ({ bmi: state.bmi })

export default connect(mapStateToProps, {
  updateAge,
  updateWeight,
  updateHeight,
  updateGender
})(Bmi)
