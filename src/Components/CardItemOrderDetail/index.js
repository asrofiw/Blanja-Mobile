import React from 'react';
import {CardItem, Text, View} from 'native-base';
import {Image} from 'react-native';
import styles from './style';

const CardCatalogList = (props) => {
  return (
    <View style={styles.card}>
      <CardItem button onPress={props.btnOnPress} style={styles.cardItem}>
        <Image style={styles.img} source={props.img} />
        <View style={styles.content}>
          <Text style={styles.product}>{props.productName}</Text>
          <Text style={styles.store}>{props.subCategory}</Text>
          <View style={styles.colorSize}>
            <Text style={styles.key}>
              Color: <Text style={styles.value}>Gray</Text>
            </Text>
            <Text style={styles.key}>
              Size: <Text style={styles.value}>L</Text>
            </Text>
          </View>
          <View style={styles.unitPrice}>
            <Text style={styles.key}>
              Units: <Text style={styles.value}>1</Text>
            </Text>
            <Text style={styles.price}>{props.price}</Text>
          </View>
        </View>
      </CardItem>
    </View>
  );
};

export default CardCatalogList;
