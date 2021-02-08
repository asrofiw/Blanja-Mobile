import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Button, Container, H1, Text, View} from 'native-base';

// Import image
import bagsSuccess from '../../assets/images/bags.png';

export class SuccessScreen extends Component {
  render() {
    return (
      <Container>
        <View style={styles.parent}>
          <Image source={bagsSuccess} />
          <H1 style={styles.status}>Success!</H1>
          <Text style={styles.message}>
            Your order will be delivered soon. Thank you for choosing our app!
          </Text>
        </View>
        <View style={styles.btnWrapper}>
          <Button
            block
            rounded
            onPress={() => this.props.navigation.replace('MyBag')}>
            <Text>Continue Shopping</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default SuccessScreen;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 94,
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  message: {
    fontSize: 14,
    textAlign: 'justify',
  },
  btnWrapper: {
    paddingHorizontal: 10,
    marginBottom: 30,
  },
})
