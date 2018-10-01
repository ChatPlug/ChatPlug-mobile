import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'


export default class LandingScreen extends React.Component<{ navigation: any }> {
  render() {
    return (
      <View>
        <Logo
          source={require('../../../assets/chatplug.png')}
        />
        <Text>Welcome in ChatPlug Client</Text>
        <Text>Log in to chatplug using your unique pin</Text>
        <Pin placeholder="PIN" ></Pin> 
        <Button onPress={() => this.props.navigation.navigate('Connections')}>Log in</Button>
      </View>
    )
  }
}

const View = styled.View`
      background-color: #fff;
      align-items: center;
      justify-content: center;
      flex: 1;
`;

const Logo = styled.Image`
    margin-bottom: 50px;
`;

const Pin = styled.TextInput`
    width: 50px;
    text-align: center;
    padding: 5px;
`;

const Button = styled.Text`
    margin-top: 6px;
    display: flex;
    width: 80px;
    height: 40px;
    border-radius: 4px;
    padding: 9px;
    text-align: center;
    background-color: #0386F4;
    color: #fff;
`;