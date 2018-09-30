import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// Imports
import LandingScreen from './src/Components/LandingScreen/index'
import ThreadConnectionsScreen from './src/Components/ThreadConnectionsScreen/index'
import { rootReducer } from './src/reducers/index.ts'

/* import reducer from './reducer'
import ThreadList from './threadlist'

const client = axios.create({
  baseURL: 'http://192.168.1.37',
  responseType: 'json'
}) */

const store = createStore(rootReducer)

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