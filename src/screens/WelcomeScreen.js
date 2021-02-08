import {Button, Text} from 'native-base';
import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';

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

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
  },
  img: {
    width: 72,
    height: 100,
    marginBottom: 150,
  },
  btnLogin: {
    marginBottom: 20,
    height: 48,
    backgroundColor: '#273AC7',
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 10,
  },
  txtLogin: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  btnSignup: {
    marginBottom: 20,
    height: 48,
    backgroundColor: 'white',
    borderColor: '#273AC7',
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 10,
  },
  txtSignup: {
    color: '#273AC7',
    fontSize: 14,
    fontWeight: 'bold',
  },
})
