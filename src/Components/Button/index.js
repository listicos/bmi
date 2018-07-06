import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import { Colors, Fonts } from '../../Themes'

const Button = (props: any) => {
  const { text, rounded, marginTop, onPress } = props

  return (
    <TouchableOpacity
      style={[styles.button, marginTop && { marginTop }, rounded && { borderRadius: 40 }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    height: 45,
    backgroundColor: Colors.button
  },
  text: {
    ...Fonts.style.h6,
    color: Colors.buttonText
  },
  rightIcon: {
    marginLeft: 10
  }
})

export default Button
