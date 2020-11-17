import React from 'react';
import {} from 'react-native';
import {View, Text, Button} from 'native-base';
import styles from './style';

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
