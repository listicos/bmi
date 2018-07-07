import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { Colors, Fonts } from '../../Themes'

import TextInput from '../../Components/TextInput'
import Button from '../../Components/Button'

import { updateUserName, updateUserEmail } from './actions'

class Intro extends Component {
  start = () => {
    this.props.history.push('/bmi')
  }

  setName = (name) => {
    this.props.updateUserName(name)
  }

  setEmail = (email) => {
    this.props.updateUserEmail(email)
  }

  render () {
    const { name, email } = this.props.user
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Welcome to BMI</Text>
          <Text style={styles.instructions}>Please enter your name and email</Text>
        </View>
        <View style={styles.welcomeContainer}>
          <View style={styles.form}>
            <TextInput label='Enter your name' color={Colors.contrastText} value={name} onChangeText={this.setName} />
            <View style={styles.space} />
            <TextInput
              label='Enter your email'
              color={Colors.contrastText}
              value={email}
              onChangeText={this.setEmail}
            />
            <View style={styles.space} />
            <Button text='Register' onPress={this.start} />
          </View>
        </View>
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
    height: 300,
    backgroundColor: Colors.header
  },
  welcomeContainer: {
    display: 'block',
    paddingHorizontal: 30
  },
  form: {
    maxWidth: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 30,
    borderRadius: 3,
    backgroundColor: Colors.contrast,
    marginTop: -60
  },
  welcome: {
    ...Fonts.style.h1,
    textAlign: 'center',
    marginBottom: 15
  },
  instructions: {
    ...Fonts.style.h6,
    maxWidth: 350,
    textAlign: 'center'
  },
  space: {
    height: 20
  }
})

const mapStateToProps = (state) => ({ user: state.user })

export default withRouter(
  connect(mapStateToProps, {
    updateUserName,
    updateUserEmail
  })(Intro)
)
