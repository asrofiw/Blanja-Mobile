import {Button, View, Text} from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

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
  txt: {
    textTransform: 'capitalize',
  },
})
