import {Button, View, Text, Textarea} from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WriteReview = () => {
  return (
    <View style={styles.parent}>
      <Text style={styles.title}>What is your rate?</Text>
      <View style={styles.star}>
        <Icon name="star-outline" size={35} color="#9b9b9b" />
        <Icon name="star-outline" size={35} color="#9b9b9b" />
        <Icon name="star-outline" size={35} color="#9b9b9b" />
        <Icon name="star-outline" size={35} color="#9b9b9b" />
        <Icon name="star-outline" size={35} color="#9b9b9b" />
      </View>
      <Text style={styles.subTitle}>
        Please share your opinion about the product
      </Text>
      <Textarea
        multiline
        rowSpan={5}
        bordered
        placeholder="Your review"
        style={styles.txtArea}
      />
      <View style={styles.wrapperBtnCam}>
        <Button rounded style={styles.btnCam}>
          <Icon name="camera" size={22} color="white" />
        </Button>
        <Text style={styles.txtAdd}>Add your photos</Text>
      </View>
      <Button full rounded style={styles.btnSend}>
        <Text>Send Review</Text>
      </Button>
    </View>
  );
};

export default WriteReview;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#f9f9f9',
    height: 700,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  star: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 10,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  txtArea: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
  },
  wrapperBtnCam: {
    height: 105,
    width: 105,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  btnCam: {
    backgroundColor: '#273AC7',
    height: 52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
    marginBottom: 10,
  },
  txtAdd: {
    fontSize: 12,
  },
  btnSend: {
    backgroundColor: '#273AC7',
  },
})
