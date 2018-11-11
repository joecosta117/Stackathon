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

const SingleSetButton = props => {
  return (
    <View>
      <Button
        raised
        title={`Roll ${props.diceset.dice}!`}
      />
    </View>
  )
}

export default SingleSetButton
