import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { Colors, Fonts } from '../../Themes'

import Header from '../../Components/Header'
import NumberInput from '../../Components/NumberInput'
import GenderInput from '../../Components/GenderInput'
import Button from '../../Components/Button'

class Calculator extends Component {
  constructor (props: any) {
    super(props)
    this.state = {
      age: 18,
      weight: 57,
      height: 175,
      gender: ''
    }
  }

  start = () => {
    this.props.history.push('/result')
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

  render () {
    return (
      <View style={styles.container}>
        <Header title='BMI Calculator' />
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={styles.content}>
            <View style={styles.inner}>
              <View style={styles.wrap}>
                <View style={styles.cards}>
                  <View style={styles.card}>
                    <NumberInput min={1} max={99} label='Age' value={this.state.age} onChangeValue={this.setAge} />
                  </View>
                  <View style={styles.card}>
                    <NumberInput
                      min={10}
                      max={300}
                      label='Weight'
                      placeholder='pounds'
                      value={this.state.weight}
                      onChangeValue={this.setWeight}
                    />
                  </View>
                  <View style={styles.card}>
                    <NumberInput
                      min={50}
                      max={250}
                      label='Height'
                      placeholder='inches'
                      value={this.state.height}
                      onChangeValue={this.setHeight}
                    />
                  </View>
                </View>
                <View style={[styles.cards, styles.genderCards]}>
                  <View style={[styles.card, styles.genderCard]}>
                    <GenderInput value={this.state.gender} onChangeValue={this.setGender} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button text='Calculate' onPress={this.start} />
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
  genderCard: {
    width: 300
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  }
})

export default Result
