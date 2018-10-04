import * as React from 'react'
import styled from 'styled-components/native'


// Imports
import ThreadListContainer from '../../containers/ThreadListContainer'
import Thread from '../../types/Thread';

export default class ThreadConnectionsScreen extends React.Component<any>{

  render() {
    return (
      <View>
        <ThreadListContainer openThread={(thread: Thread) => this.props.navigation.navigate('ChatScreen', { threadName: thread.connectionName, threadId: thread.id })}/>
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