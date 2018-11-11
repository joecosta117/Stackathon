import React from 'react';
import { createStackNavigator  } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen'
import RollingScreen from '../screens/RollingScreen'
import CharacterScreen from '../screens/CharacterScreen'

export default NavigationApp = createStackNavigator({
 Home: {screen: HomeScreen},
 Roll: {screen: RollingScreen},
 Character: {screen: CharacterScreen},
});
