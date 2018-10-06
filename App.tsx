import * as React from 'react'
import { StyleSheet, StatusBar, View, Text } from 'react-native'
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
  baseURL: 'http://192.168.254.106:2137/api/v1',
  responseType: 'json'
}) 
client.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
})

client.interceptors.response.use(response => {
  console.log('Response:', response)
  return response
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

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Stack/>
      </Provider>
    )
  }
}
