import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation'

// Imports
import LandingScreen from './src/Components/LandingScreen/index'
import ThreadConnectionsScreen from './src/Components/ThreadConnectionsScreen/index'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default createStackNavigator(
  {
    Landing: { screen: LandingScreen, navigationOptions: { header: null } },
    Connections: ThreadConnectionsScreen,
  },
  {
    initialRouteName: 'Landing',  
  }  
)