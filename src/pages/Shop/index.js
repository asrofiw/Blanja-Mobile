import {Button, Content, Text} from 'native-base';
import React, {Component} from 'react';
// import {FlatList} from 'react-native';
import styles from './style';

// Import Component
import CardCategory from '../../Components/CardCategory';

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
