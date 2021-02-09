import {Button, View, Text} from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

const SelectSize = () => {
  return (
    <View style={styles.parent}>
      <Text style={styles.title}>Select Size</Text>
      <View style={styles.wrapperBtn}>
        <Button dark bordered style={styles.btn}>
          <Text>XS</Text>
        </Button>
        <Button dark bordered style={styles.btn}>
          <Text>S</Text>
        </Button>
        <Button dark bordered style={styles.btn}>
          <Text>M</Text>
        </Button>
        <Button dark bordered style={styles.btn}>
          <Text>L</Text>
        </Button>
        <Button dark bordered style={styles.btn}>
          <Text>XL</Text>
        </Button>
      </View>
    </View>
  );
};

export default SelectSize;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#f9f9f9',
    height: 300,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  wrapperBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 15,
  },
})
