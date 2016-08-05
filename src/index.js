import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import MyScene from './MyScene';

class Main extends Component {
  render() {
    return (
      <MyScene />
    )
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => Main);
