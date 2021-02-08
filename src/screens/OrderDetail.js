import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Content, Text, View} from 'native-base';

// Import component
import CardItemOrderDetail from '../Components/CardItemOrderDetail';

// Import default image product
import noImg from '../../assets/images/no_img.png';

export class OrderDetail extends Component {
  render() {
    return (
      <Content>
        <View style={styles.parent}>
          <View style={styles.order}>
            <Text style={styles.orderNo}>Order №1947034</Text>
            <Text style={styles.date}>05-12-2019</Text>
          </View>
          <View style={styles.tracking}>
            <Text style={styles.trackingTitle}>
              Tracking Number:{'  '}
              <Text style={styles.trackingNo}>IW3475453455</Text>
            </Text>
            <Text style={styles.status}>Delivered</Text>
          </View>
          <Text style={styles.txtItemCount}>3 items</Text>
          <CardItemOrderDetail
            btnOnPress={() =>
              this.props.navigation.navigate('RatingReview', {
                id: 1,
              })
            }
            img={noImg}
            subCategory="Shoes"
            productName="Shoes"
            price={new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
              maximumSignificantDigits: 1,
            }).format(100000)}
          />
          <CardItemOrderDetail
            btnOnPress={() =>
              this.props.navigation.navigate('RatingReview', {
                id: 1,
              })
            }
            img={noImg}
            subCategory="Shoes"
            productName="Shoes"
            price={new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
              maximumSignificantDigits: 1,
            }).format(100000)}
          />
          <CardItemOrderDetail
            btnOnPress={() =>
              this.props.navigation.navigate('RatingReview', {
                id: 1,
              })
            }
            img={noImg}
            subCategory="Shoes"
            productName="Shoes"
            price={new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
              maximumSignificantDigits: 1,
            }).format(100000)}
          />
          <Text style={styles.orderInformation}>Order Information</Text>
          <View style={styles.orderContent}>
            <Text style={styles.orderKey}>Shipping Address:</Text>
            <Text style={styles.orderValue}>
              3 Newbridge Court ,Chino Hills, CA 91709, United States
            </Text>
          </View>
          <View style={styles.orderContent}>
            <Text style={styles.orderKey}>Payment Method:</Text>
            <Text style={styles.orderValue}>Blanja</Text>
          </View>
          <View style={styles.orderContent}>
            <Text style={styles.orderKey}>Delivery Method:</Text>
            <Text style={styles.orderValue}>FedEx, 3 days, 15$</Text>
          </View>
          <View style={styles.orderContent}>
            <Text style={styles.orderKey}>Discount:</Text>
            <Text style={styles.orderValue}>10%, Personal promo code</Text>
          </View>
          <View style={styles.orderContent}>
            <Text style={styles.orderKey}>Total Amount:</Text>
            <Text style={styles.orderValue}>
              {new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                maximumSignificantDigits: 1,
              }).format(100000)}
            </Text>
          </View>
          <View style={styles.btnBottom}>
            <Button dark bordered rounded style={styles.btnOrder}>
              <Text style={styles.txtOrder}>Reorder</Text>
            </Button>
            <Button rounded style={styles.btnFeedback}>
              <Text style={styles.txtFeedback}>Leave feedback</Text>
            </Button>
          </View>
        </View>
      </Content>
    );
  }
}

export default OrderDetail;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  order: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  orderNo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#9b9b9b',
  },
  tracking: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  trackingTitle: {
    fontSize: 14,
    color: '#9b9b9b',
  },
  trackingNo: {
    fontSize: 14,
    color: '#000000',
  },
  status: {
    fontSize: 14,
    color: 'green',
  },
  txtItemCount: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 20,
  },
  orderInformation: {
    marginTop: 35,
    marginBottom: 15,
  },
  orderContent: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  orderKey: {
    width: '40%',
    fontSize: 14,
    color: '#9b9b9b',
  },
  orderValue: {
    width: '60%',
    fontSize: 14,
    color: '#000000',
    textAlign: 'justify',
  },
  btnBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btnOrder: {
    height: 36,
    width: '45%',
    justifyContent: 'center',
  },
  txtOrder: {
    textTransform: 'capitalize',
  },
  btnFeedback: {
    height: 36,
    width: '45%',
    justifyContent: 'center',
    backgroundColor: '#273AC7',
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 10,
    marginBottom: 20,
  },
  txtFeedback: {
    textTransform: 'capitalize',
  },
})
