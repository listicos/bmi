import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Slider from 'rc-slider'

import IconWeb from '../../Components/IconWeb'
import { Colors, Fonts } from '../../Themes'

class NumberInput extends Component {
  on = () => {
    this.props.history.push('/calculator')
  }

  handleGender = (value) => {
    this.props.onChangeValue(value)
  }

  render () {
    const { value } = this.props
    const disabledFemale = value !== 'Female'
    const disabledMale = value !== 'Male'
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Gender</Text>
        <Text style={styles.value}>{`I'm`}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button, disabledFemale && styles.disabled]}
            onPress={() => this.handleGender('Female')}
          >
            <Text style={styles.buttonText}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, disabledMale && styles.disabled]}
            onPress={() => this.handleGender('Male')}
          >
            <Text style={styles.buttonText}>Male</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    padding: 25,
    borderRadius: 3,
    marginHorizontal: 15,
    backgroundColor: Colors.contrast,
    alignItems: 'center'
  },
  content: {
    display: 'block',
    paddingHorizontal: 15
  },
  label: {
    ...Fonts.style.text,
    fontWeight: Fonts.weight.bold,
    color: Colors.contrastText,
    textAlign: 'center'
  },
  value: {
    ...Fonts.style.inputNumber,
    color: Colors.contrastText,
    textAlign: 'center'
  },
  slider: {
    display: 'block',
    width: '75%',
    marginVertical: 10
  },
  lineContainer: {
    marginTop: 20,
    marginBottom: 20,
    position: 'relative',
    width: 75,
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    alignItems: 'center'
  },
  line: {
    position: 'absolute',
    top: -21
  },
  buttons: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center'
  },
  button: {
    minWidth: 86,
    height: 30,
    borderRadius: 3,
    marginHorizontal: 10,
    backgroundColor: Colors.button,
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabled: {
    backgroundColor: Colors.border
  },
  buttonText: {
    ...Fonts.style.text,
    fontWeight: Fonts.weight.bold,
    color: Colors.text,
    textAlign: 'center'
  },
  space: {
    height: 20
  }
})

export default NumberInput
