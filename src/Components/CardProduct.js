import React from 'react';
import {Card, CardItem, Body, Text, View} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardProduct = (props) => {
  return (
    <Card transparent key={props.keyItem} style={styles.card}>
      <CardItem button onPress={props.btnOnPress} style={styles.cardItem}>
        <Body>
          <Image style={styles.img} source={props.img} />
          <View style={styles.rating}>
            <Icon name="star-outline" size={13} color="#9b9b9b" />
            <Icon name="star-outline" size={13} color="#9b9b9b" />
            <Icon name="star-outline" size={13} color="#9b9b9b" />
            <Icon name="star-outline" size={13} color="#9b9b9b" />
            <Icon name="star-outline" size={13} color="#9b9b9b" />
            <Text style={styles.rate}>(0)</Text>
          </View>
          <Text style={styles.store}>{props.subCategory}</Text>
          <Text style={styles.product}>{props.productName}</Text>
          <Text style={styles.price}>{props.price}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 270,
    marginRight: 10,
    marginBottom: 20,
  },
  cardItem: {
    backgroundColor: '#f9f9f9',
  },
  img: {
    width: '100%',
    height: 170,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  rate: {
    fontSize: 10,
    lineHeight: 10,
    color: '#9b9b9b',
  },
  store: {
    fontSize: 12,
    lineHeight: 12,
    color: '#9b9b9b',
    marginBottom: 2,
  },
  product: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    lineHeight: 20,
  },
});
