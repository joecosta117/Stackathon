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
import SingleCharacterButton from './SingleCharacterButton'

export default class CharacterScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      selectedCharacter: {},
      selectedDiceSet: {}
    }
    this.updateSelectedCharacter = this.updateSelectedCharacter.bind(this)
    this.updateSelectedDiceSet = this.updateSelectedDiceSet.bind(this)
  }

  async componentDidMount() {
    const characters = await axios.get('https://hero-roller.herokuapp.com/api/characters')
    // console.log('heroessssss: ', characters.data)
    //characters.data[0] accesses rykar's character object
    this.setState({characters: characters.data})
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

  render() {
    return (
      <View>
        <Text>Select your hero and start rolling!</Text>
        {this.state.characters.map(character => <SingleCharacterButton key={character.id} character={character} />)}
        {/*{onPress={() => navigate('component')}}*/}
        {/*<Button
          onPress={() => {
            this.updateSelectedCharacter(this.props.characters[0])
          }}
          title={`${this.props.characters[0].name}`}
        />*/}
      </View>
    )
  }

}

const styles = StyleSheet.create({

})

// {this.state.characters.map(character => <Text>{character.name}</Text>)}
