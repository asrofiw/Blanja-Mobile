import React, {Component} from 'react';
import {} from 'react-native';
import {
  Text,
  View,
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Button,
  Item,
  Input,
} from 'native-base';
import styles from './style/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class ShippingAddress extends Component {
  render() {
    return (
      <Container style={styles.parent}>
        <Content>
          <Item rounded style={styles.itemInput}>
            <Icon name="magnify" size={25} />
            <Input placeholder="Search address" />
          </Item>
          <View>
            <Text style={styles.title}>Shipping Address</Text>
          </View>
          <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Body>
                <View style={styles.cardTop}>
                  <Text style={styles.txtName}>Jane Doe</Text>
                  <Button
                    transparent
                    style={styles.btnChange}
                    onPress={() =>
                      this.props.navigation.navigate('ChangeAddress')
                    }>
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
          <Button
            full
            bordered
            dark
            rounded
            style={styles.btn}
            onPress={() =>
              this.props.navigation.navigate('AddingShippingAddress')
            }>
            <Text>Add New Address</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default ShippingAddress;
