import { GiftedChat } from 'react-native-gifted-chat'
import React from 'react'
import MessagesContainer from '../../containers/MessagesContainer';

export default class ChatScreen extends React.Component<{ navigation: any }> {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.threadName}`,
     headerTitleStyle : {
       textAlign: 'center',
      },
        headerStyle:{
            backgroundColor:'white',
        },
    });
  render() {
    return (
      <MessagesContainer threadId={this.props.navigation.getParam('threadId', 1)}/>
    )
  }
}