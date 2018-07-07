import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import { Colors, Fonts } from '../../Themes'

const TextInputComponent = (props: any) => {
  const { label, value, onChangeText, password, color } = props

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, color && { color }]}>{label}</Text>}
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        secureTextEntry={password}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  label: {
    ...Fonts.style.text,
    marginBottom: 10
  },
  input: {
    ...Fonts.style.text,
    color: Colors.contrastText,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    borderStyle: 'solid',
    borderRadius: 0,
    height: 28,
    paddingHorizontal: 0
    // elevation: 2,
    // shadowColor: Colors.border,
    // shadowRadius: 5,
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.5
  }
})

export default TextInputComponent
