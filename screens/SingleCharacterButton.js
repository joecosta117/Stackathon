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
// import {
//   navigate
// } from 'react-navigation';
import SingleCharacterScreen from './SingleCharacterScreen'


const SingleCharacterButton = props => {
  // const { navigate } = props.navigation;
  return (
    <View>
      <Button
        onPress={() =>
          navigate('SingleCharacterScreen', { screen: 'SingleCharacterScreen' })
        }
        raised
        title={`${props.character.name}: ${props.character.race} ${props.character.class}`}
      />
    </View>
  )
}

export default SingleCharacterButton
