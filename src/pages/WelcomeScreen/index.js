import {Button, Text} from 'native-base';
import React, {Component} from 'react';
import {Image, View} from 'react-native';
import styles from './style';

export class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <Image
          source={require('../../assets/images/Blanja-blue.png')}
          style={styles.img}
        />
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
          <Text style={styles.txtSignup}>Sign up</Text>
        </Button>
      </View>
    );
  }
}

export default WelcomeScreen;
