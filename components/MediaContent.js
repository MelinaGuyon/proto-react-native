import React from 'react';
import { StyleSheet, Text, View, ScrollView, List, ListItem, Image } from 'react-native';
import { map } from 'lodash'

import Api from '../controllers/Api';


export default class MediaContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: null
    }
  }

  componentWillMount() {
    this.connect()
  }

  connect() {
    const datas = Api.connect().then((response)=> {
      const jsonRsp = JSON.parse(response._bodyInit)
      this.setState({ datas : jsonRsp.response.docs })
    }).catch((error)=> { console.warn(error) })
  }

  renderNews = (item, index) => {
    let image = null
    if (item && item.bagItem) {
      image = item.bagItem[0].medias[0].href
    }

    const title = item.title
    const article = item.news[0]
    const date = item.published
    return (
      <View key={index} style={styles.mediaItem}>
        {image &&
          <Image style={styles.image} source={{uri: image}}/>
        }
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{article}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    )
  }

  render() {
    const { datas } = this.state
    return (
      <ScrollView style={styles.container}>
        {map(datas, this.renderNews)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    width: '100%'
  },
  mediaItem: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '95%',
    height: 'auto',
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 20
  },
  image: {
    height: 150,
    marginBottom: 15,
    width: '100%'
  },
  title: {
    color: 'black',
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 15
  },
  text: {
    color: 'gray',
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 20
  },
  date: {
    color: 'lightgray',
    fontWeight: "bold",
    fontSize: 10,
    marginTop: 15
  }
});
