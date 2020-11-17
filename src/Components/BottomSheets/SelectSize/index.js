import {Button, View, Text} from 'native-base';
import React from 'react';
import {} from 'react-native';
import styles from './style';

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
