import { Alert } from 'react-native';
import { Notifications, Permissions } from 'expo';

async function getiOSNotificationPermission() {
  const { status } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  if (status !== 'granted') {
    return;
  }
}

function notificate() {
  const localNotification = {
    title: 'title',
    body: 'text'
  }
  const time = Date.now() + 5000
  Notifications.addListener(() => { Alert.alert('Notification!') })
  getiOSNotificationPermission().then(()=> {
    Notifications.scheduleLocalNotificationAsync(localNotification, { time })
  }).catch((error)=> { console.warn(error) })

}

export default {
  notificate
}
