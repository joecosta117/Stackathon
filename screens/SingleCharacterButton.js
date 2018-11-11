import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
// import {Link} from 'react-router-dom'
import { Button, Header } from 'react-native-elements'
import {StackNavigator, createStackNavigator} from 'react-navigation';
import SingleCharacterScreen from './SingleCharacterScreen'

// const SingleCharacterStack = createStackNavigator({
//   SingleCharacter: SingleCharacterScreen,
// });

const SingleCharacterButton = props => {
  // const { navigate } = props.navigation;
  return (
    <View>
      <Button
        onPress={() =>
          props.navigation.navigate('SingleCharacter')
        }
        raised
        title={`${props.character.name}: ${props.character.race} ${props.character.class}`}
      />
    </View>
  )
}

export default SingleCharacterButton
