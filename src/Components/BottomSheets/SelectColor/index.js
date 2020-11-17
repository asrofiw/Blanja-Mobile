import {Button, View, Text} from 'native-base';
import React from 'react';
import {} from 'react-native';
import styles from './style';

const SelectColor = () => {
  return (
    <View style={styles.parent}>
      <Text style={styles.title}>Select Color</Text>
      <View style={styles.wrapperBtn}>
        <Button dark bordered style={styles.btn}>
          <Text style={styles.txt}>Black</Text>
        </Button>
        <Button dark bordered style={styles.btn}>
          <Text style={styles.txt}>White</Text>
        </Button>
        <Button dark bordered style={styles.btn}>
          <Text style={styles.txt}>Blue</Text>
        </Button>
        <Button dark bordered style={styles.btn}>
          <Text style={styles.txt}>Grey</Text>
        </Button>
        <Button dark bordered style={styles.btn}>
          <Text style={styles.txt}>Brown</Text>
        </Button>
      </View>
    </View>
  );
};

export default SelectColor;
