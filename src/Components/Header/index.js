import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Colors, Fonts } from '../../Themes'

class Header extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: Colors.header
  },
  title: {
    ...Fonts.style.h3,
    textAlign: 'center'
  }
})

export default Header
