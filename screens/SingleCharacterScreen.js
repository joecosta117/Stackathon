import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
import SingleSetButton from './SingleSetButton'
import { Button, Header } from 'react-native-elements'


export default class SingleCharacterScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dicesets: [],
      // selectedSet: null,
      result: '#'
    }
    // this.updateSelectedSet = this.updateSelectedSet.bind(this)
    this.updateResult = this.updateResult.bind(this)
  }

  // async componentDidMount() {
  //   const sets = await axios.get(`https://hero-roller.herokuapp.com/api/characters/${this.props.character.id}`)
  //   this.setState({dicesets: sets.data.dicesets})
  // }

  // updateSelectedSet (selectedSet) {
  //   this.setState({selectedSet})
  // }
  updateResult (result) {
    this.setState({result})
  }

  render() {
    const { character } = this.props
    return (
      <View>
        <Text>{`${character.name}: ${character.race} ${character.class}`}</Text>
        {character.dicesets.map(diceset =>
          <Button
            onPress={() => {
              let result = () => d20.roll(diceset.dice)
              this.updateResult(result)
            }}
            raised
            title={`Roll ${diceset.dice}!`}
          />
        )}
        <Text>YOU ROLLED:</Text>
        <Text>{this.state.result}</Text>
      </View>
    )
  }
}


