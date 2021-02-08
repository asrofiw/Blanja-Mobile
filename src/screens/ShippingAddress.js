import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  itemInput: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    paddingVertical: 30,
  },
  card: {
    borderRadius: 10,
    borderWidth: 0.5,
    marginBottom: 20,
  },
  cardItem: {
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
});
