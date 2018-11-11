import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
import { Button, Header } from 'react-native-elements'
import axios from 'axios'

export default class CharacterScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      selectedCharacter: {},
      result: '#',
      selected: false
    }
    this.updateSelectedCharacter = this.updateSelectedCharacter.bind(this)
    this.updateSelectedDiceSet = this.updateSelectedDiceSet.bind(this)
    this.updateResult = this.updateResult.bind(this)
    this.updateSelected = this.updateSelected.bind(this)
  }

  async componentDidMount() {
    const characters = await axios.get('https://hero-roller.herokuapp.com/api/characters')
    // console.log('heroessssss: ', characters.data)
    //characters.data[0] accesses rykar's character object
    this.setState({characters: characters.data})
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

  render() {
    if (this.state.selected === false) {
      return (
        <View>
          <Text>Select your hero and start rolling!</Text>
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
        </View>
      )
    } else {
      let selectedCharacter = this.state.selectedCharacter
      return (
        <View>
          <Text>Roll for {selectedCharacter.name}!</Text>
          {selectedCharacter.dicesets.map(diceset =>
            <Button
              onPress={() => {
                this.updateResult(d20.roll(diceset.dice))
              }}
              key={diceset.id}
              raised
              title={`Roll ${diceset.dice} for ${diceset.name}!`}
            />
          )}
          <Text>YOU ROLLED:</Text>
          <Text>{this.state.result}</Text>
          <Button
            onPress={() => {
              this.updateSelected(false)
            }}
            raised
            title='Return to the other Heroes'
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({

})

