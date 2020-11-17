import {Button, View, Text, Textarea} from 'native-base';
import React from 'react';
import {} from 'react-native';
import styles from './style';
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
