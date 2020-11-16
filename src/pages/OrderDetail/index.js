import React, {Component} from 'react';
import {} from 'react-native';
import {Button, Content, Text, View} from 'native-base';
import styles from './style';

// Import component
import CardItemOrderDetail from '../../Components/CardItemOrderDetail';

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
              this.props.navigation.navigate('DetailProduct', {
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
              this.props.navigation.navigate('DetailProduct', {
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
              this.props.navigation.navigate('DetailProduct', {
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
