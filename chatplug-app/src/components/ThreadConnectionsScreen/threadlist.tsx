import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Thread from '../../types/Thread'


export default class ThreadList extends Component<{ getThreadList: () => any, threadList: Thread[] }, {}>{
  componentDidMount() {
    this.props.getThreadList()
  }
  renderItem = ({ item }) => (
    <View  key={item.id} style={styles.item}>
      <Text>{item.connectionName}</Text>
    </View>
  );
  render() {
    const { threadList } = this.props;
    return (
      <FlatList
        data={threadList}
        keyExtractor={(item, _) => '' + item.id}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
})