import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export class Search extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <Text> Search </Text>
      </View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
})
