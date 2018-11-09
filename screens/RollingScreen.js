import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements'

//Dice Functions:
// const roll100 = d20.roll('1d100');
// const roll20 = d20.roll(20)
// const roll12 = d20.roll('1d12')
// const roll10 = d20.roll('1d10')
// const roll8 = d20.roll('1d8')
// const roll6 = d20.roll('1d6')
// const roll4 = d20.roll('1d4')


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
      // <Text>Hero Roller!</Text>
      <View>
        <Button
          onPress={() => {
            let result = d20.roll('1d100');
            this.updateResult(result)
            Alert.alert(`You rolled a ${result}!`)
          }}
          raised
          title='ROLL d100!' />
        <Button
          onPress={() => {
            let result = d20.roll(20);
            this.updateResult(result)
            Alert.alert(`You rolled a ${result}!`)
          }}
          raised
          title='ROLL d20!' />
        <Button
          onPress={() => {
            let result = d20.roll('1d12');
            this.updateResult(result)
            Alert.alert(`You rolled a ${result}!`)
          }}
          raised
          title='ROLL d12!' />
        <Button
          onPress={() => {
            let result = d20.roll('1d10');
            this.updateResult(result)
            Alert.alert(`You rolled a ${result}!`)
          }}
          raised
          title='ROLL d10!' />
        <Button
          onPress={() => {
            let result = d20.roll('1d8');
            this.updateResult(result)
            Alert.alert(`You rolled a ${result}!`)
          }}
          raised
          title='ROLL d8!' />
        <Button
          onPress={() => {
            let result = d20.roll('1d6');
            this.updateResult(result)
            Alert.alert(`You rolled a ${result}!`)
          }}
          raised
          title='ROLL d6!' />
        <Button
          onPress={() => {
            let result = d20.roll('1d4');
            this.updateResult(result)
            Alert.alert(`You rolled a ${result}!`)
          }}
          raised
          title='ROLL d4!' />
          <Text>You rolled {this.state.result}!</Text>
      </View>
    )
  }
}
