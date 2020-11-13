import React, {Component} from 'react';
import {Image} from 'react-native';
import {Button, Container, H1, Text, View} from 'native-base';
import styles from './style';

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
