import * as React from 'react'
import styled from 'styled-components/native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import reducer from './reducer'
import ThreadList from './threadlist'

const client = axios.create({
  baseURL: ' http://your_ip_here',
  responseType: 'json'
})

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)))

export default class ThreadConnectionsScreen extends React.Component<any>{
  render() {
    return (
      <Provider store={store}>
        <View>
          <ThreadList />
        </View>
    </Provider>
    );
  }
}

const View = styled.View`
      background-color: #fff;
      padding: 3px;
      justify-content: flex-start;
      flex: 1;
`;