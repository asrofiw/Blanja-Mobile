import {Button, Text, View} from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  btn: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 48,
  },
  txt: {
    fontSize: 16,
    color: 'black',
    textTransform: 'capitalize',
  },
})
