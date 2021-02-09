import {Body, CardItem} from 'native-base';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

const styles = StyleSheet.create({
  cardItems: {
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 2,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ava: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: 'powderblue',
    marginRight: 10,
  },
  body: {
    width: '100%',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  topContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  star: {
    flexDirection: 'row',
  },
  date: {
    fontSize: 14,
    color: '#9b9b9b',
  },
  content: {
    lineHeight: 21,
    fontSize: 14,
    textAlign: 'justify',
    color: '#222222',
    marginBottom: 10,
  },
  bottomContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  txtBottom: {
    fontSize: 12,
    color: '#9b9b9b',
    marginRight: 10,
  },
})
