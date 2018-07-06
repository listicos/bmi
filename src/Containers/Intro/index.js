import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../../Components/Button'
import { Colors, Fonts } from '../../Themes'

class Intro extends Component {
  start = () => {
    this.props.navigation.navigate('Quiz')
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>Welcome to BMI</Text>
          <Text style={styles.instructions}>Please enter you name</Text>
        </View>
        <Button text='BEGIN' onPress={this.start} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    ...Fonts.style.h1,
    color: Colors.textAccent,
    textAlign: 'center',
    marginBottom: 15
  },
  instructions: {
    ...Fonts.style.normal,
    maxWidth: 250,
    textAlign: 'center',
    color: Colors.textAccent
  }
})

export default Intro
