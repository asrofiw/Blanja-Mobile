import {Button, Text, View} from 'native-base';
import React from 'react';
import {} from 'react-native';
import styles from './style';

const CardCategory = (props) => {
  return (
    <View>
      <Button full transparent onPress={props.onPressBtn} style={styles.btn}>
        <Text style={styles.txt}>{props.category}</Text>
      </Button>
    </View>
  );
};

export default CardCategory;
