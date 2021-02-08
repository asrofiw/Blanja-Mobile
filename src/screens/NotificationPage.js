import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

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

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  parentNoNotif: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgNoNotif: {
    marginBottom: 20,
  },
})
