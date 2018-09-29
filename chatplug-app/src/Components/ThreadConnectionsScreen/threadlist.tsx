import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { listThreads } from './reducer'

class ThreadList extends Component<any>{
  componentDidMount() {
    this.props.listThreads('2137')
  }
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.data.connectionName}</Text>
    </View>
  );
  render() {
    const { threads } = this.props;
    return (
      <FlatList
        data={threads}
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

const mapStateToProps = state => {
  let storedThreads = state.threads.map(thread => ({ key: `${thread.data.id}`, ...thread }))
  return {
    threds: storedThreads
  };
};

const mapDispatchToProps = {
  listThreads
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadList)