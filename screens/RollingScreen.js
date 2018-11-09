import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
import { Button } from 'react-native-elements'
// import d20 from 'd20'


export default class RollingScreen extends React.Component {
  render() {
    return (
      // <Text>Hero Roller!</Text>
      <View>
        <Button
          onPress={() => {
            let result = d20.roll('1d100');
            Alert.alert(`You rolled a ${result}!`)
          }}
          raised
          title='ROLL d100!' />
        <Button
          onPress={() => {
            let result = d20.roll(20);
            Alert.alert(`You rolled a ${result}!`)
          }}
          raised
          title='ROLL d20!' />
        <Button
          onPress={() => {
            let result = d20.roll('1d12');
            Alert.alert(`You rolled a ${result}!`)
          }}
          raised
          title='ROLL d12!' />
        <Button
          onPress={() => {
            let result = d20.roll('1d10');
            Alert.alert(`You rolled a ${result}!`)
          }}
          raised
          title='ROLL d10!' />
        <Button
          onPress={() => {
            let result = d20.roll('1d8');
            Alert.alert(`You rolled a ${result}!`)
          }}
          raised
          title='ROLL d8!' />
        <Button
          onPress={() => {
            let result = d20.roll('1d6');
            Alert.alert(`You rolled a ${result}!`)
          }}
          raised
          title='ROLL d6!' />
        <Button
          onPress={() => {
            let result = d20.roll('1d4');
            Alert.alert(`You rolled a ${result}!`)
          }}
          raised
          title='ROLL d4!' />
          <Text>Your roll result is:</Text>
      </View>
    )
  }
}
