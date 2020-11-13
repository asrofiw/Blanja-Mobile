import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  CheckBox,
  Container,
  Content,
  Footer,
  ListItem,
  Text,
  View,
} from 'native-base';
import styles from './style/styles';

export class Checkout extends Component {
  state = {
    paymentSelected: false,
  };

  render() {
    const {paymentSelected} = this.state;
    return (
      <Container style={styles.parent}>
        <Content style={styles.body}>
          <View>
            <Text style={styles.title}>Shipping Address</Text>
          </View>
          <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Body>
                <View style={styles.cardTop}>
                  <Text style={styles.txtName}>Jane Doe</Text>
                  <Button transparent style={styles.btnChange}>
                    <Text style={styles.txtBtnChange}>Change</Text>
                  </Button>
                </View>
                <View>
                  <Text style={styles.txt}>3 Newbrige Court</Text>
                  <Text style={styles.txt}>
                    Chino Hills, CA 91790, United States
                  </Text>
                </View>
              </Body>
            </CardItem>
          </Card>
          <View>
            <Text style={styles.title}>Payment</Text>
          </View>
          <ListItem style={styles.paymentMethod}>
            <Image style={styles.imgPayment} />
            <Body>
              <Text>Blanjapay</Text>
            </Body>
            <CheckBox
              color="#273AC7"
              checked={paymentSelected}
              onPress={() => this.setState({paymentSelected: !paymentSelected})}
            />
          </ListItem>
        </Content>

        <Footer style={styles.footer}>
          <View style={styles.amount}>
            <Text style={styles.totalTxt}>Order:</Text>
            <Text style={styles.total}>112$</Text>
          </View>
          <View style={styles.amount}>
            <Text style={styles.totalTxt}>Delivery:</Text>
            <Text style={styles.total}>10$</Text>
          </View>
          <View style={styles.amount}>
            <Text style={styles.summary}>Summary:</Text>
            <Text style={styles.summaryPrice}>122$</Text>
          </View>
          <Button
            full
            rounded
            style={styles.btnCheckout}
            onPress={() => this.props.navigation.navigate('SuccessScreen')}>
            <Text>Submit Order</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

export default Checkout;
