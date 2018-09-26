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
        <Text>Log in to chatplug using your pin...</Text>
        <LandingButton>ddd</LandingButton>
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

const LandingButton = styled.Text`
    display: flex;
    width: 30rem;
    height: 15rem;
    border-radius: 4px;
    justify-content: center;
    background-color: #0386F4;
    color: #fff;
`;