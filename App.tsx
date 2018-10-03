import * as React from 'react'
import { StyleSheet, StatusBar, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import { Provider } from 'react-redux'
// Imports
import LandingScreen from './src/components/LandingScreen/index'
import ThreadConnectionsScreen from './src/components/ThreadConnectionsScreen/index'
import Chat from './src/components/ChatScreen/index'
import { rootReducer } from './src/reducers'
import axiosMiddleware from 'redux-axios-middleware'

const client = axios.create({
  baseURL: 'http://192.168.254.103:2137/api/v1',
  responseType: 'json'
}) 

const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)))

const Stack = createStackNavigator(
  {
    Landing: { screen: LandingScreen, navigationOptions: { header: null } },
    Connections: ThreadConnectionsScreen,
    ChatScreen: Chat
  },
  {
    initialRouteName: 'Landing',
  }  
)

export default () => {
  return(
    <Provider store={store}>
      <View>
        <StatusBar barStyle="dark-content" />
        <Stack/>
      </View>
    </Provider>
  )
}
