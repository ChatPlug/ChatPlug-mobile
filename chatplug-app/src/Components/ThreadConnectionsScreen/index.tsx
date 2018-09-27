import * as React from 'react';
import { Text, FlatList } from 'react-native';
import styled from 'styled-components/native'


export default class ThreadConnectionsScreen extends React.Component<{}> {
  render() {
    return (
      <View>
        <FlatList
        data={[{key: 'ddd v1'}, {key: 'ddd v2'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
}

const View = styled.View`
      background-color: #fff;
      padding: 3px;
      justify-content: flex-start;
      flex: 1;
`;