import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import MediaContent from './components/MediaContent'
import Article from './components/Article'
import Notification from './controllers/Notification'

const RootStack = StackNavigator({
  MediaContent: { screen: MediaContent },
  Article: { screen: Article }
})

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      notificationLaunched: false
    }
  }

  componentWillMount() {
    !this.state.notificationLaunched && this.launchNotification()
  }

  launchNotification() {
    Notification.notificate()
    this.setState({ notificationLaunched: true })
  }

  render() {
    return <RootStack />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
