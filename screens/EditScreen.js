import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
import {StackNavigator, createStackNavigator} from 'react-navigation';
import t from 'tcomb-form-native'
import { Button, Header } from 'react-native-elements'
import axios from 'axios'


const Form = t.form.Form

const Character = t.struct({
  name: t.String,
  race: t.maybe(t.String),
  class: t.maybe(t.String)
})

const Dice = t.struct({
  description: t.maybe(t.String),
  dice: t.String,
})

const options = {
  fields: {
    name: {
      error: 'What is a hero without a name?'
    },
    dice: {
      error: 'How will you defeat the dragon without dice?'
    }
  }
}

export default class EditScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      character: false,
      dice: false
    }
    this.updateCharacter = this.updateCharacter.bind(this)
    this.updateDice = this.updateDice.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.selected !== this.props.selected) {
      return true
    } else {
      return false
    }
  }

  static navigationOptions = {
    title: 'HERO ROLLER!',
    headerStyle: {
      backgroundColor: '#e0430f',
    },
    headerTintColor: '#f7f5f4',
  }

  updateCharacter (bool) {
    this.setState({character: bool})
  }
  updateDice (bool) {
    this.setState({dice: bool})
  }
  async handleSubmit () {
    const value = this._form.getValue()
    if (value.dice) {
      await axios.post('https://hero-roller.herokuapp.com/api/dicesets', value)
      Alert.alert('Dice set added!')
    } else {
      await axios.post('https://hero-roller.herokuapp.com/api/characters', value)
      Alert.alert('Hero added to your party!')
    }
  }

  render() {
    if (this.state.character === false && this.state.dice === false) {
      return (
        <View style={styles.container}>
          <Button
            onPress={() => {
              this.updateCharacter(true)
            }}
            raised
            title='Add a New Hero!'
          />
          <Button
            onPress={() => {
              this.updateDice(true)
            }}
            raised
            title='Add a New Dice Set!'
          />
        </View>
      )
    } else if (this.state.character === true) {
      return (
        <View style={styles.container}>
          <Form
            ref={c => this._form = c}
            type={Character}
            options={options}
          />
          <Button
            title="Add New Hero!"
            onPress={this.handleSubmit}
          />
          <Button
            title="Go Back"
            onPress={() => this.updateCharacter(false)}
          />
        </View>
      )
    } else if (this.state.dice === true) {
      return (
        <View style={styles.container}>
          <Form
            ref={c => this._form = c}
            type={Dice}
            options={options}
          />
          <Button
            title="Add New Dice Set!"
            onPress={this.handleSubmit}
          />
          <Button
            title="Go Back"
            onPress={() => this.updateDice(false)}
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
