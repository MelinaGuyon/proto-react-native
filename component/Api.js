import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Api extends React.Component {
  componentWillMount() {
    this.connect()
  }

  connect = () => {
    fetch('https://api.afp.com/v1/api/latest?access_token=fc603bb1-f4f9-45a4-9d8c-74efe3b0bce4')
      .then(response => {
        if (response.status === 200) {
          console.log('here',response)
        } else {
          throw new Error('Something went wrong on api server!');
        }
      })
  }

  render() {
    return (
      <Text>On est là</Text>
    );
  }
}
