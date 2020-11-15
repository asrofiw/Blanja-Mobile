import React from 'react';
import {CardItem, Text, View} from 'native-base';
import {Image} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardCatalogList = (props) => {
  return (
    <View style={styles.card}>
      <CardItem button onPress={props.btnOnPress} style={styles.cardItem}>
        <Image style={styles.img} source={props.img} />
        <View style={styles.content}>
          <Text style={styles.product}>{props.productName}</Text>
          <Text style={styles.store}>{props.subCategory}</Text>
          <View style={styles.rating}>
            <Icon name="star-outline" size={13} color="#9b9b9b" />
            <Icon name="star-outline" size={13} color="#9b9b9b" />
            <Icon name="star-outline" size={13} color="#9b9b9b" />
            <Icon name="star-outline" size={13} color="#9b9b9b" />
            <Icon name="star-outline" size={13} color="#9b9b9b" />
            <Text style={styles.rate}>(0)</Text>
          </View>
          <Text style={styles.price}>{props.price}</Text>
        </View>
      </CardItem>
    </View>
  );
};

export default CardCatalogList;
