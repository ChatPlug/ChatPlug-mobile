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