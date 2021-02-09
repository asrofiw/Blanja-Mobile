import React from 'react';
import {Card, CardItem, Body, Text, View} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardCatalog = (props) => {
  return (
    <Card transparent style={styles.card}>
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

export default CardCatalog;

const styles = StyleSheet.create({
  card: {
    width: 165,
    height: 270,
    marginRight: 10,
    marginBottom: 20,
  },
  cardItem: {
    backgroundColor: '#f9f9f9',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  img: {
    width: '100%',
    height: 184,
    borderRadius: 10,
    backgroundColor: 'powderblue',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 8,
    marginBottom: 7,
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
    marginBottom: 5,
  },
  product: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  price: {
    fontSize: 14,
    lineHeight: 20,
  },
})
