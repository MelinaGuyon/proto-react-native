import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Api from '../controllers/Api';
import Filtre from './Filtre';
import Content from './Content';

export default class MediaContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: null,
      filtre: ""
    }
  }

  componentWillMount() {
    this.connect()
    console.log(this.state)
  }

  filtreIsUpdated = (filtre) => {
    console.log(filtre)
    this.setState({filtre : filtre})
  }

  connect() {
    const datas = Api.connect().then((response)=> {
      const jsonRsp = JSON.parse(response._bodyInit)
      this.setState({ datas : jsonRsp.response.docs })
    }).catch((error)=> { console.warn(error) })
  }

  render() {
    const { datas, filtre } = this.state
    const { navigation } = this.props

    return (
      <ScrollView style={styles.container}>
        <Filtre datas={datas} onUpdateFiltre={this.filtreIsUpdated} />
        <Content datas={datas} filtre={filtre} navigation={navigation} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    width: '100%'
  }
});
