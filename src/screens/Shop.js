import {Button, Text} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {connect} from 'react-redux';

// Import Component
import CardCategory from '../Components/CardCategory';

// Import Action
import subcategoryAction from '../redux/actions/subcategory';

export class Shop extends Component {
  async componentDidMount(){
    try {
      await this.props.getSubCategory()
    } catch (err) {
      console.log(err.message)
    }
  }

  render() {
    const {data} = this.props.subcategory;
    return (
      <View style={styles.parent}>
        <Button rounded block onPress={() => this.props.navigation.navigate('Catalog')} style={styles.btnAllItem}>
          <Text>View All Items</Text>
        </Button>
        <Text style={styles.txt}>Choose category</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <CardCategory
              category={`${item.sub_category_name}`}
              onPressBtn={() => this.props.navigation.navigate('Catalog')}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  subcategory: state.subcategory
})

const mapDispatchToProps = {
  getSubCategory: subcategoryAction.getSubCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

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
