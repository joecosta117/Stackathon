import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Alert,
  ImageBackground
} from 'react-native';
import { Button, Header, Divider, Badge } from 'react-native-elements'
import axios from 'axios'
import t from 'tcomb-form-native'

const Form = t.form.Form

const Dice = t.struct({
  description: t.maybe(t.String),
  dice: t.String,
})

const options = {
  fields: {
    dice: {
      error: 'Need some dice to roll against goblins'
    }
  }
}

export default class CharacterScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      selectedCharacter: {},
      result: '#',
      selected: false,
      dice: false
    }
    this.updateSelectedCharacter = this.updateSelectedCharacter.bind(this)
    this.updateSelectedDiceSet = this.updateSelectedDiceSet.bind(this)
    this.updateResult = this.updateResult.bind(this)
    this.updateSelected = this.updateSelected.bind(this)
    this.updateDice = this.updateDice.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    const characters = await axios.get('https://hero-roller.herokuapp.com/api/characters')
    this.setState({characters: characters.data})
  }

  async shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      return true
    } else {
      return false
    }
  }

  async ComponentDidUpdate (prevProps, prevState) {
    let oldCharacters = this.prevProps.characters
    let newCharacters = this.props.characters
    if (oldCharacters !== newCharacters) {
      const characters = await axios.get('https://hero-roller.herokuapp.com/api/characters')
      this.setState({characters: characters.data})
    }
  }

  static navigationOptions = {
    title: 'HERO ROLLER!',
    headerStyle: {
      backgroundColor: '#e0430f',
    },
    headerTintColor: '#f7f5f4',
  }

  updateSelectedCharacter (selectedCharacter) {
    this.setState({selectedCharacter})
  }
  updateSelectedDiceSet (selectedDiceSet) {
    this.setState({selectedDiceSet})
  }
  updateSelected (bool) {
    this.setState({selected: bool})
  }
  updateResult (result) {
    this.setState({result})
  }
  updateDice (bool) {
    this.setState({dice: bool})
  }
  async handleSubmit () {
    const value = this._form.getValue()
    await axios.post('https://hero-roller.herokuapp.com/api/dicesets', value)
    Alert.alert('Dice set added!')
  }

  render() {
    if (this.state.selected === false) {
      return (
        <View style={styles.container}>
          <ScrollView>
          <Text style={styles.text}>CHOOSE YOUR HERO!</Text>
          <Divider style={{ backgroundColor: 'red', height: 4 }} />
            {this.state.characters.map(character =>
              character.race ?
              <Button
                onPress={() => {
                  this.updateSelectedCharacter(character)
                  this.updateSelected(true)
                }}
                key={character.id}
                raised
                title={`${character.name}: ${character.race} ${character.class}`}
              />
              :
              <Button
                onPress={() => {
                  this.updateSelectedCharacter(character)
                  this.updateSelected(true)
                }}
                key={character.id}
                raised
                title={`${character.name}`}
              />
            )}
          </ScrollView>
        </View>
      )
    } else {
      let selectedCharacter = this.state.selectedCharacter
      return (
        <View style={styles.container}>
          <Text style={styles.text}>ROLL FOR {selectedCharacter.name.toUpperCase()}!</Text>
          <Divider style={{ backgroundColor: 'red', height: 4 }} />
          {selectedCharacter.dicesets.map(diceset =>
            <Button
              onPress={() => {
                this.updateResult(d20.roll(diceset.dice))
              }}
              titleStyle={{
                fontWeight: 'bold',
                size: 20
              }}
              key={diceset.id}
              raised
              title={`Roll ${diceset.dice} for ${diceset.name}!`}
            />
          )}
          <Text style={[styles.result]}>YOU ROLLED:</Text>
          <Text style={[styles.resultscore]}>{this.state.result}</Text>

          {/*<Button
            onPress={async () => {
              await axios.delete(`https://hero-roller.herokuapp.com/api/characters/${selectedCharacter.id}`)
              Alert.alert('Hero retired from adventuring!')
            }}
            raised
            title='Retire this hero from your party'
          />*/}

          <Button
            onPress={() => {
              this.updateSelected(false)
            }}
            raised
            title='Return to your Heroes'
          />
        </View>
      )
    }
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
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center'
  },
  container: {
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
  },
})

