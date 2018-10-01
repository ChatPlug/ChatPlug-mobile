import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { GiftedChat } from 'react-native-gifted-chat'
import Message from '../../types/Message'

export default class Messages extends Component<{ getMessages: (payload: any) => any, messages: Message[] }, {}>{
  componentDidMount() {
    this.props.getMessages({ id: 1, after: '' })
  }
  onSend() {
  }

  render() {
    return (
      <GiftedChat
        messages={this.props.messages.map((el: Message) => { return { _id: el.id, text: el.content, createdAt: el.createdAt, user: { _id: el.author.id, name: el.author.username, avatar: el.author.avatarUrl } } }) }
        user={{
          _id: 1,
        }}
      />
    )
  }
}