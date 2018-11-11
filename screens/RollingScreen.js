import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
import CharacterScreen from './CharacterScreen'
import { Button, Header } from 'react-native-elements'
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
      backgroundColor: '#e0430f',
    },
    headerTintColor: '#f7f5f4',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    //   alignSelf: 'center',
    //   justifyContent: 'center'
    // }
    //above not working
  }

  // componentWillMount() {
  //   RNShake.addEventListener('shake', () => {
  //       let result = this.state.selectedDice();
  //       this.updateResult(result)
  //       Alert.alert(`You rolled a ${result}!`)
  //   })
  // }

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
          title='ROLL 1d100!' />
        <Button
          onPress={() => {
            this.updateResult(d20.roll('1d20'))
          }}
          raised
          title='ROLL 1d20!' />
        <Button
          onPress={() => {
            this.updateResult(d20.roll('1d12'))
          }}
          raised
          title='ROLL 1d12!' />
        <Button
          onPress={() => {
            this.updateResult(d20.roll('1d10'))
          }}
          raised
          title='ROLL 1d10!' />
        <Button
          onPress={() => {
            this.updateResult(d20.roll('1d8'))
          }}
          raised
          title='ROLL 1d8!' />
        <Button
          onPress={() => {
            this.updateResult(d20.roll('1d6'))
          }}
          raised
          title='ROLL 1d6!' />
        <Button
          onPress={() => {
            this.updateResult(d20.roll('1d4'))
          }}
          raised
          title='ROLL 1d4!' />

          <Text style={[styles.result]}>YOU ROLLED:</Text>
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
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
  },
})
