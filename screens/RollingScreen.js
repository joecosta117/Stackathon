import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Alert,
  ImageBackground
} from 'react-native';
import CharacterScreen from './CharacterScreen'
import { Button, Header, Divider, Badge } from 'react-native-elements'
//for shake event, but didn't get it to work in time before hackathon ended
// import RNShake from 'react-native-shake';
// import RNShakeEvent from 'react-native-shake-event';

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

  static navigationOptions = {
    title: 'HERO ROLLER!',
    headerStyle: {
      backgroundColor: '#e0430f'
    },
    headerTintColor: '#f7f5f4'
  }

//for shake event, but didn't get it to work in time before hackathon ended
  // componentWillMount() {
  //   RNShake.addEventListener('shake', () => {
  //       let result = this.state.selectedDice();
  //       this.updateResult(result)
  //       Alert.alert(`You rolled a ${result}!`)
  //   })
  // }

//for shake event, but didn't get it to work in time before hackathon ended
  // componentWillUnmount() {
  //   RNShake.removeEventListener('shake');
  // }

  updateDice (selectedDice) {
    this.setState({selectedDice})
  }
  updateResult (result) {
    this.setState({result})
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            this.updateResult(d20.roll('1d100'))
          }}
          raised
          titleStyle={{
            fontWeight: 'bold',
            color: 'black'
          }}
          buttonStyle={{
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          title='ROLL 1d100!' />
        <Button
          onPress={() => {
            this.updateResult(d20.roll('1d20'))
          }}
          raised
          titleStyle={{
            fontWeight: 'bold',
            color: 'black'
          }}
          buttonStyle={{
            borderColor: "transparent",
            borderRadius: 5
          }}
          title='ROLL 1d20!' />
        <Button
          onPress={() => {
            this.updateResult(d20.roll('1d12'))
          }}
          raised
          titleStyle={{
            fontWeight: 'bold',
            color: 'black'
          }}
          buttonStyle={{
            borderColor: "transparent",
            borderRadius: 5
          }}
          title='ROLL 1d12!' />
        <Button
          onPress={() => {
            this.updateResult(d20.roll('1d10'))
          }}
          raised
          stitleStyle={{
            fontWeight: 'bold',
            color: 'black'
          }}
          buttonStyle={{
            borderColor: "transparent",
            borderRadius: 5
          }}
          title='ROLL 1d10!' />
        <Button
          onPress={() => {
            this.updateResult(d20.roll('1d8'))
          }}
          raised
          titleStyle={{
            fontWeight: 'bold',
            color: 'black'
          }}
          buttonStyle={{
            borderColor: "transparent",
            borderRadius: 5
          }}
          title='ROLL 1d8!' />
        <Button
          onPress={() => {
            this.updateResult(d20.roll('1d6'))
          }}
          raised
          titleStyle={{
            fontWeight: 'bold',
            color: 'black'
          }}
          buttonStyle={{
            borderColor: "transparent",
            borderRadius: 5
          }}
          title='ROLL 1d6!' />
        <Button
          onPress={() => {
            this.updateResult(d20.roll('1d4'))
          }}
          raised
          stitleStyle={{
            fontWeight: 'bold',
            color: 'black'
          }}
          buttonStyle={{
            borderColor: "transparent",
            borderRadius: 5
          }}
          title='ROLL 1d4!' />

          <Text style={[styles.result]}>YOU ROLLED:</Text>
          <Divider style={{ backgroundColor: 'red', height: 4 }} />
          <Text style={[styles.resultscore]}>{this.state.result}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  result: {
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center'
  },
  resultscore: {
    fontWeight: 'bold',
    fontSize: 60,
    alignSelf: 'center'
  },
  container: {
    justifyContent: 'center',
    marginTop: 30,
    padding: 0,
    backgroundColor: '#ffffff',
  }
})
