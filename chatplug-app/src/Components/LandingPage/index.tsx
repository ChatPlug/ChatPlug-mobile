import * as React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native'


export default class Landing extends React.Component<{}> {
  render() {
    return (
      <View>
        <Logo
          source={require('../../../assets/chatplug.png')}
        />
        <Text>Welcome in ChatPlug Client</Text>
        <Text>Log in to chatplug using your unique pin</Text>
        <Pin placeholder="PIN" ></Pin>
        <LandingButton>Log in</LandingButton>
      </View>
    );
  }
}

const View = styled.View`
      flex: 1;
      background-color: #fff;
      align-items: center;
      justify-content: center;
`;

const Logo = styled.Image`
    margin-bottom: 50px;
`;

const Pin = styled.TextInput`
    width: 50px;
    text-align: center;
    padding: 5px;
`;

const LandingButton = styled.Text`
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