import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Api from '../controllers/Api';
import Content from './Content';

export default class Article extends React.Component {
  render() {
    const { params } = this.props.navigation.state
    const item = params.article

    let image = null
    if (item && item.bagItem) {
      image = item.bagItem[0].medias[0].href
    }

    const title = item.title
    const article = item.news[0]
    const date = item.published
    return (
      <View style={styles.mediaItem} >
        {image &&
          <Image style={styles.image} source={{uri: image}}/>
        }
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{article}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    )
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
    width: '100%',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 25
  },
  image: {
    height: 250,
    width: '100%'
  },
  title: {
    color: 'black',
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 25
  },
  text: {
    color: 'gray',
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  date: {
    color: 'lightgray',
    fontWeight: "bold",
    fontSize: 10,
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20
  }
});
