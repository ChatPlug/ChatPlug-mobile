import * as React from 'react';
import { Text, FlatList } from 'react-native';
import styled from 'styled-components/native'
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducer'

const client = axios.create({
  baseURL: '',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)))

// Imports
import { threadsList } from './reducer'


class ThreadConnectionsScreen extends React.Component<any>{
  componentDidMount() {
    this.props.threadsList('')
  }
  renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
  render() {
    return (
      <Provider store={store}>
        <View>
          <FlatList
            // data = {threads}
            data={[{key: 'ddd v1'}, {key: 'ddd v2'}]}
            renderItem={this.renderItem}
          />
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

const mapToStateProps = state => {
  let storedThreads = state.threads.map(thread => ({ key: thread.id, ...thread }))
  
  return {
    thread: storedThreads
  }
}

const mapDispatchToProps = {
  threadsList
}

export default connect(mapToStateProps, mapDispatchToProps)(ThreadConnectionsScreen)