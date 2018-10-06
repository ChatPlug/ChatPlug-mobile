import React, { Component } from 'react'
import {KeyboardAvoidingView } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import Message from '../../types/Message'

export default class Messages extends Component<{  threadId: number, getEarlierMessages: (payload: any) => any, getMessages: (payload: any) => any, messages: Message[] }, {}>{
  componentDidMount() {
    this.props.getMessages({ connId: this.props.threadId })
  }
  onSend() {
  }

  render() {
    return (
      <KeyboardAvoidingView 
        behavior={'padding'} 
        style={{flex:1}} 
        keyboardVerticalOffset={75}>
          <GiftedChat
            loadEarlier={true}
            onLoadEarlier={() => { this.props.getEarlierMessages({ connId: this.props.threadId, after: this.props.messages[this.props.messages.length - 1].id })  }}
            messages= {
              this.props.messages.map((el: Message) => {
                return {
                   _id: el.id, text: el.author.username + '\n' + el.content, createdAt: el.createdAt, user: {
                     _id: el.author.id, name: 'el.author.username', avatar: el.author.avatarUrl 
                  } 
                } 
              }) 
            }
            user={{
            _id: 1,
            }}
          />
      </KeyboardAvoidingView>
    )
  }
}