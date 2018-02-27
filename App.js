import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MediaContent from './components/MediaContent';
import Notification from './controllers/Notification';

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
    return (
      <View style={styles.container}>
        <MediaContent />
      </View>
    );
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
