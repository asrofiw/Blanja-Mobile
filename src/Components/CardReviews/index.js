import {Body, CardItem} from 'native-base';
import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

const CardReviews = (props) => {
  return (
    <View>
      <CardItem style={styles.cardItems}>
        <Body style={styles.body}>
          <View style={styles.header}>
            <Image source={props.img} style={styles.ava} />
            <Text style={styles.name}>{props.name}</Text>
          </View>
          <View style={styles.topContent}>
            <View style={styles.star}>
              <Icon name="star" size={13} color="#FFBA49" />
              <Icon name="star" size={13} color="#FFBA49" />
              <Icon name="star" size={13} color="#FFBA49" />
              <Icon name="star" size={13} color="#FFBA49" />
              <Icon name="star-outline" size={13} color="#9b9b9b" />
            </View>
            <Text style={styles.date}>{props.date}</Text>
          </View>
          <Text style={styles.content}>{props.reviews}</Text>
          <View style={styles.bottomContent}>
            <Text style={styles.txtBottom}>Helpful</Text>
            <Icon name="thumb-up" size={13} color="#9b9b9b" />
          </View>
        </Body>
      </CardItem>
    </View>
  );
};

export default CardReviews;
