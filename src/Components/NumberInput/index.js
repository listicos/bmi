import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Slider from 'rc-slider'

import IconWeb from '../../Components/IconWeb'
import { Colors, Fonts } from '../../Themes'

class NumberInput extends Component {
  on = () => {
    this.props.history.push('/calculator')
  }

  handleSubtract = () => {
    const { min, value, onChangeValue } = this.props
    if (value > min) {
      onChangeValue(value - 1)
    }
  }

  handleAdd = () => {
    const { max, value, onChangeValue } = this.props
    if (value < max) {
      onChangeValue(value + 1)
    }
  }

  handleSlider = (value) => {
    this.props.onChangeValue(value)
  }

  render () {
    const { min, max, label, value, placeholder } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.placeholder}>{placeholder}</Text>
        <Text style={styles.value}>{value}</Text>
        <View style={styles.slider}>
          <Slider min={min} max={max} defaultValue={value} value={value} onChange={this.handleSlider} />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={() => this.handleSubtract()}>
            <IconWeb icon='minus' size='1x' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.handleAdd()}>
            <IconWeb icon='plus' size='1x' />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    borderRadius: 3,
    padding: 25,
    backgroundColor: Colors.contrast,
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 30
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
    textAlign: 'center',
    height: 88
  },
  placeholder: {
    ...Fonts.style.text,
    fontSize: Fonts.size.medium,
    color: Colors.border,
    textAlign: 'center',
    height: 14
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
    //justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 3,
    margin: 10,
    backgroundColor: Colors.button,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    ...Fonts.style.inputNumber,
    fontWeight: Fonts.weight.bold,
    color: Colors.text,
    textAlign: 'center'
  },
  space: {
    height: 20
  }
})

export default NumberInput
