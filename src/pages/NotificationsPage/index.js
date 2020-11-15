import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';

export class NotificationsPage extends Component {
  state = {
    notification: false,
  };

  render() {
    return (
      <View style={styles.parent}>
        {!this.state.notification && (
          <View style={styles.parentNoNotif}>
            <Image
              source={require('../../assets/images/no_notif.png')}
              style={styles.imgNoNotif}
            />
            <Text>No notifications yet</Text>
          </View>
        )}
      </View>
    );
  }
}

export default NotificationsPage;
