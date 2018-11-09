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
          raised
          title='ROLL d12!' />
        <Button
          raised
          title='ROLL d10!' />
        <Button
          raised
          title='ROLL d8!' />
        <Button
          raised
          title='ROLL d6!' />
        <Button
          raised
          title='ROLL d4!' />
          <Text>Your roll result is:</Text>
      </View>
    )
  }
}
