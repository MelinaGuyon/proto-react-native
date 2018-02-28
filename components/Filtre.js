import React from 'react';
import { StyleSheet, Text, View, ScrollView, List, ListItem, Image, TextInput } from 'react-native';
import { debounce } from 'lodash'


export default class Filtre extends React.Component {

	constructor(props) {
	    super(props)
	    this.state = {
	      filtre: ""
	    }
	}

	onChangeText = (filtre) => {
		this.setState({filtre})
		this.props.onUpdateFiltre(filtre)
	}

  render() {
    const { datas } = this.props
    return (
      <TextInput style={{height: 40, padding: 10, backgroundColor: 'white', color: '#EC6E44', borderBottomWidth: 3, borderBottomColor: '#EC6E44'}}
        onChangeText={this.onChangeText}
        value={this.state.filtre} />
    );
  }
}
