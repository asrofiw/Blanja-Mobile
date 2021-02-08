import {Button, Content, Text} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

// Import Component
import CardCategory from '../Components/CardCategory';

export class Shop extends Component {
  render() {
    return (
      <Content style={styles.parent}>
        <Button rounded block style={styles.btnAllItem}>
          <Text>View All Items</Text>
        </Button>
        <Text style={styles.txt}>Choose category</Text>
        <CardCategory
          category="Shoes"
          onPressBtn={() => this.props.navigation.navigate('Catalog')}
        />
        {/* <FlatList
          data={dataCategory}
          renderItem={({item}) => <CardCategory category={item} />}
        /> */}
      </Content>
    );
  }
}

export default Shop;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  btnAllItem: {
    backgroundColor: '#273AC7',
    height: 48,
    shadowColor: '#273AC7',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 10,
    marginTop: 15,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  txt: {
    fontSize: 14,
    color: '#9b9b9b',
    marginHorizontal: 10,
    marginBottom: 20,
  },
})
