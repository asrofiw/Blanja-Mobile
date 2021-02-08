import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Button, Container, Content, Footer, H1, Text, View} from 'native-base';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import action
import cartAction from '../redux/actions/cart';
import checkoutAction from '../redux/actions/checkout';

// import Default image product
import noImage from '../../assets/images/no_img.png';

export class Bag extends Component {
  state = {
    isShow: false,
    quantity: 1,
  };

  async componentDidMount() {
    const {token} = this.props.auth;
    await this.props.getCart(token);
  }
  render() {
    const {isShow, counter} = this.state;
    const {dataCart} = this.props.cart;
    console.log(this.props.cart);
    return (
      <Container style={styles.parent}>
        <Content style={styles.body}>
          <View>
            <H1 style={styles.title}>My Bag</H1>
          </View>
          {dataCart.length > 0 &&
            dataCart.map((items) => (
              <View style={styles.card}>
                <Image style={styles.img} source={noImage} />
                <View style={styles.content}>
                  <View style={styles.top}>
                    <View>
                      <Text style={styles.item}>{items.item}</Text>
                      <View style={styles.desc}>
                        <Text style={styles.key}>Color: </Text>
                        <Text style={styles.value}>Gray</Text>
                        <Text style={styles.key}>Size: </Text>
                        <Text style={styles.value}>L</Text>
                      </View>
                    </View>
                    <Button
                      transparent
                      onPress={() => this.setState({isShow: !isShow})}>
                      <Icon name="dots-vertical" size={20} />
                    </Button>
                  </View>
                  <View style={styles.bottom}>
                    <View style={styles.wrapperCount}>
                      <Button
                        style={styles.btn}
                        onPress={() => {
                          if (counter === 1) {
                            this.setState({counter: 1});
                          } else {
                            this.setState({counter: counter - 1});
                          }
                        }}>
                        <Icon name="minus" size={20} color="#9b9b9b" />
                      </Button>
                      <Text>{items.quantity}</Text>
                      <Button
                        style={styles.btn}
                        onPress={() => this.setState({counter: counter + 1})}>
                        <Icon name="plus" size={20} color="#9b9b9b" />
                      </Button>
                    </View>
                    <Text>
                      {new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        maximumSignificantDigits: 1,
                      }).format(items.total)}
                    </Text>
                  </View>
                </View>
                {isShow && (
                  <Button style={styles.btnDelete}>
                    <Text style={styles.txtDelete}>Delete from the list</Text>
                  </Button>
                )}
              </View>
            ))}
        </Content>
        <Footer style={styles.footer}>
          <View style={styles.amount}>
            <Text style={styles.totalTxt}>Total amount:</Text>
            <Text style={styles.total}>
              {new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                maximumSignificantDigits: 1,
              }).format(this.props.cart.summary)}
            </Text>
          </View>
          <Button
            full
            rounded
            style={styles.btnCheckout}
            onPress={() => this.props.navigation.navigate('Checkout')}>
            <Text>Checkout</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
  checkout: state.checkout,
});

const mapDispatchToProps = {
  getCart: cartAction.getCart,
  postCheckout: checkoutAction.postCheckout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bag);

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  body: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  card: {
    height: 120,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    position: 'relative',
  },
  img: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: '100%',
    width: 104,
    marginRight: 10,
  },
  content: {
    width: '80%',
    height: '100%',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '80%',
    marginTop: 10,
  },
  item: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  desc: {
    flexDirection: 'row',
  },
  key: {
    fontSize: 12,
    color: '#9b9b9b',
  },
  value: {
    fontSize: 12,
    marginRight: 10,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
    paddingRight: 5,
  },
  wrapperCount: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 105,
    justifyContent: 'space-between',
  },
  btn: {
    width: 36,
    height: 36,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  btnDelete: {
    borderColor: 'black',
    width: 170,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    position: 'absolute',
    right: '10%',
    top: '15%',
  },
  txtDelete: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 12,
  },
  footer: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    height: 150,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'center',
  },
  amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalTxt: {
    fontSize: 14,
    color: '#9b9b9b',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnCheckout: {
    backgroundColor: '#273AC7',
  },
});
