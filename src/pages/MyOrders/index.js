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
import styles from './style/style';

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
