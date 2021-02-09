import React from 'react';
import { StyleSheet } from 'react-native';
import {View, Text, Button} from 'native-base';

const SortBy = () => {
  return (
    <View style={styles.parent}>
      <Text style={styles.title}>Sort by</Text>
      <Button full style={styles.btn}>
        <Text style={styles.txt}>Popular</Text>
      </Button>
      <Button full style={styles.btnTransparent}>
        <Text style={styles.txtTransparent}>Newest</Text>
      </Button>
      <Button full style={styles.btnTransparent}>
        <Text style={styles.txtTransparent}>Customer review</Text>
      </Button>
      <Button full style={styles.btnTransparent}>
        <Text style={styles.txtTransparent}>Price: lowest to high</Text>
      </Button>
      <Button full style={styles.btnTransparent}>
        <Text style={styles.txtTransparent}>Price: high to lowest</Text>
      </Button>
    </View>
  );
};

export default SortBy;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#f9f9f9',
    height: 500,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  btn: {
    justifyContent: 'flex-start',
    backgroundColor: '#273AC7',
  },
  btnTransparent: {
    backgroundColor: '#f9f9f9',
    justifyContent: 'flex-start',
  },
  txt: {
    textTransform: 'capitalize',
  },
  txtTransparent: {
    textTransform: 'capitalize',
    color: 'black',
    fontWeight: 'normal',
  },
})
