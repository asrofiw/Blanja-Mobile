import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  body: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    paddingTop: 30,
    paddingBottom: 15,
  },
  card: {
    borderRadius: 10,
    borderWidth: 0.5,
    marginBottom: 20,
    borderColor: 'red',
  },
  cardItem: {
    borderStyle: 'solid',
    borderRadius: 10,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 7,
  },
  btnChange: {
    height: 25,
  },
  txtName: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  txtBtnChange: {
    fontSize: 14,
    lineHeight: 20,
    color: 'red',
    textTransform: 'capitalize',
  },
  txt: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 2,
  },
  footer: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    height: 200,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'center',
  },
  amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalTxt: {
    fontSize: 14,
    color: '#9b9b9b',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  summary: {
    fontSize: 18,
    color: '#9b9b9b',
  },
  summaryPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#273AC7',
  },
  btnCheckout: {
    backgroundColor: '#273AC7',
  },
  paymentMethod: {
    width: '100%',
  },
  imgPayment: {
    width: 64,
    height: 38,
    backgroundColor: 'white',
    borderRadius: 10,
  },
})
