import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements'

const roll100 = () => d20.roll('1d100');
const roll20 = () => d20.roll(20)
const roll12 = () => d20.roll('1d12')
const roll10 = () => d20.roll('1d10')
const roll8 = () => d20.roll('1d8')
const roll6 = () => d20.roll('1d6')
const roll4 = () => d20.roll('1d4')


export default class RollingScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedDice: null,
      result: '#'
    }
    this.updateDice = this.updateDice.bind(this)
    this.updateResult = this.updateResult.bind(this)
  }

  updateDice (selectedDice) {
    this.setState({selectedDice})
  }
  updateResult (result) {
    this.setState({result})
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => {
            this.updateDice(roll100)
          }}
          raised
          title='SELECT d100!' />
        <Button
          onPress={() => {
            this.updateDice(roll20)
          }}
          raised
          title='SELECT d20!' />
        <Button
          onPress={() => {
            this.updateDice(roll12)
          }}
          raised
          title='SELECT d12!' />
        <Button
          onPress={() => {
            this.updateDice(roll10)
          }}
          raised
          title='SELECT d10!' />
        <Button
          onPress={() => {
            this.updateDice(roll8)
          }}
          raised
          title='SELECT d8!' />
        <Button
          onPress={() => {
           this.updateDice(roll6)
          }}
          raised
          title='SELECT d6!' />
        <Button
          onPress={() => {
           this.updateDice(roll4)
          }}
          raised
          title='SELECT d4!' />


        <Button
          onPress={() => {
            let result = this.state.selectedDice();
            this.updateResult(result)
            Alert.alert(`You rolled a ${result}!`)
          }}
          raised
          title='ROLL!' />
          <Text>YOU ROLLED {this.state.result}!</Text>
      </View>
    )
  }
}
