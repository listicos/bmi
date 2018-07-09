import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Modal from 'react-modal'
import Button from '../../Components/Button'
import { Colors, Fonts } from '../../Themes'
import { getBMI } from '../../Services/bmi'

const Result = ({ isOpen, onRequestClose, bmi }) => {
  const { weight, height } = bmi
  const bmiResult = getBMI(weight, height)

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
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={onRequestClose}>
      <View style={styles.modal}>
        <Text style={styles.modalHeader}>Your BMI is:</Text>
        <Text style={styles.result}>{bmiResult.bmi.toFixed(2)}</Text>
        <Text style={styles.result}>{bmiResult.group}</Text>
        <Button text='Close' marginTop={30} onPress={onRequestClose} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    paddingHorizontal: 50
  },
  modalHeader: {
    ...Fonts.style.h1,
    color: Colors.contrastText,
    textAlign: 'center',
    marginBottom: 15
  },
  result: {
    ...Fonts.style.inputNumber,
    color: Colors.contrastText,
    textAlign: 'center'
  }
})

export default Result
