import React, {Component} from 'react';
import {
  View,
  Text,
  Content,
  Container,
  H1,
  Card,
  CardItem,
  Body,
} from 'native-base';
import {StyleSheet} from 'react-native'

export class MyOrders extends Component {
  render() {
    return (
      <Container style={styles.parent}>
        <Content>
          <View>
            <H1 style={styles.title}>My Orders</H1>
          </View>
          <Card style={styles.card}>
            <CardItem
              button
              onPress={() => this.props.navigation.navigate('OrderDetail')}>
              <Body>
                <View style={styles.cardTitle}>
                  <Text style={styles.txtOrderNo}>Order №1947034</Text>
                  <Text style={styles.txtDate}>05-12-2019</Text>
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.txtKey}>Tracking Number :</Text>
                  <Text style={styles.txtValue}>IW3475453455</Text>
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.txtKey}>Quantity :</Text>
                  <Text style={styles.txtValue}>3</Text>
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.txtKey}>Total Amount :</Text>
                  <Text style={styles.txtValue}>112$</Text>
                </View>
                <View style={styles.cardStatus}>
                  <Text style={styles.txtStatus}>Delivered</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default MyOrders;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    height: '100%',
  },
  card: {
    height: 164,
  },
  cardTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 5,
  },
  cardStatus: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  txtOrderNo: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  txtDate: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9b9b9b',
  },
  txtKey: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9b9b9b',
    marginRight: 10,
  },
  txtValue: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  txtStatus: {
    fontSize: 14,
    lineHeight: 20,
    color: 'green',
  },
});
