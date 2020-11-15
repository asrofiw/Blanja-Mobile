import React from 'react';
import {Card, CardItem, Body, Text, View} from 'native-base';
import styles from './style';
import {Image} from 'react-native';
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
