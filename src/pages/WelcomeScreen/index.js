import {Button, Text} from 'native-base';
import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './style';

export class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <Button
          block
          rounded
          style={styles.btnLogin}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.txtLogin}>Login</Text>
        </Button>
        <Button
          block
          bordered
          rounded
          style={styles.btnSignup}
          onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={styles.txtSignup}>Signup</Text>
        </Button>
      </View>
    );
  }
}

export default WelcomeScreen;
