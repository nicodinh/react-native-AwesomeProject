import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MyScene extends Component {
  constructor() {
    super();
    this.state = {
      name: 'nico',
    };
  }

  render = () => {
    return (
      <View>
        <Text>Hi! My name is {this.state.name}.</Text>
      </View>
    )
  }
}
