import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'


export default class ThreadList extends Component<any>{
  componentDidMount() {
    this.props.getThreadList()
  }
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.connectionName}</Text>
    </View>
  );
  render() {
    const { threadList } = this.props;
    return (
      <FlatList
        data={threadList}
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
});