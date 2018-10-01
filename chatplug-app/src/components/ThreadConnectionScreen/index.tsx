import * as React from 'react'
import styled from 'styled-components/native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import reducer from './reducer'
import ThreadListContainer from '../../containers/ThreadListContainer'

export default class ThreadConnectionsScreen extends React.Component<any>{

  render() {
    return (
      <View>
        <ThreadListContainer/>
        <Button onPress={() => this.props.navigation.navigate('ChatScreen')}>Let's chat</Button>
      </View>
    )
  }
}

const View = styled.View`
      background-color: #fff;
      padding: 3px;
      justify-content: flex-start;
      flex: 1;
`

const Button = styled.Text`
    margin-top: 6px;
    display: flex;
    width: 80px;
    height: 40px;
    border-radius: 4px;
    padding: 9px;
    text-align: center;
    background-color: #0386F4;
    color: #fff;
`;