import React, {Component} from 'react';
import {Image, FlatList, StyleSheet} from 'react-native';
import {Button, Container, Content, H1, Spinner, Text, View} from 'native-base';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {API_URL} from '@env';

// import Action
import itemsAction from '../redux/actions/items';

// Import Component
import CardProduct from '../Components/CardProduct';

// Import default image product
import noImg from '../../assets/images/no_img.png';

export class Home extends Component {
  async componentDidMount() {
    try {
      await this.props.getItems();
      await this.props.getItemsNewest();
    } catch (e) {
      console.log(e.message);
    }
  }

  render() {
    const {data, dataNewest, isLoading, isError, alertMsg} = this.props.items;
    return (
      <Container style={styles.parent}>
        {isLoading && <Spinner color="blue" />}
        <Content>
          <Image
            source={require('../../assets/images/ImageHome.png')}
            style={styles.imgRoot}
          />
          <Text style={styles.titleImg}>Fashion Sale</Text>
          <Button
            transparent
            style={styles.btnImg}
            onPress={() => this.props.navigation.navigate('NotificationsPage')}>
            <Icon name="bell-outline" size={35} color="#ffffff" />
          </Button>
          <View style={styles.title}>
            <View>
              <H1 style={styles.titleH1}>New</H1>
              <Text style={styles.titleTxt}>
                You&apos;ve never seen it before!
              </Text>
            </View>
            <View>
              <Button transparent style={styles.btnViewAll}>
                <Text style={styles.txtBtn}>View all</Text>
              </Button>
            </View>
          </View>
          <FlatList
            horizontal 
            data={dataNewest} 
            renderItem={({item}) => 
            <CardProduct
              keyItem={item.id}
              btnOnPress={() =>
                this.props.navigation.navigate('DetailProduct', {
                  id: item.id,
                })
              }
              img={item.image? {uri: `${API_URL}${item.image}`} : `${noImg}`}
              subCategory={item.sub_category}
              productName={item.name}
              price={new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                maximumSignificantDigits: 3,
              }).format(item.price)}
            />}
            keyExtractor={(item) => item.id.toString()}
          />
          <View style={styles.title}>
            <View>
              <H1 style={styles.titleH1}>Popular</H1>
              <Text style={styles.titleTxt}>
                Find clothes that are trending recently
              </Text>
            </View>
            <View>
              <Button transparent style={styles.btnViewAll}>
                <Text style={styles.txtBtn}>View all</Text>
              </Button>
            </View>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data} 
            renderItem={({item}) => 
            <CardProduct
              keyItem={item.id}
              btnOnPress={() =>
                this.props.navigation.navigate('DetailProduct', {
                  id: item.id,
                })
              }
              img={item.image? {uri: `${API_URL}${item.image}`} : `${noImg}`}
              subCategory={item.sub_category}
              productName={item.name}
              price={new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                maximumSignificantDigits: 3,
              }).format(item.price)}
            />}
            keyExtractor={(item) => item.id.toString()}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = {
  getItems: itemsAction.getData,
  getItemsNewest: itemsAction.getDataNewest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    // paddingHorizontal: 20,
  },
  imgRoot: {
    width: '100%',
    position: 'relative',
  },
  titleImg: {
    width: 190,
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'absolute',
    left: '5%',
    top: '27%',
  },
  btnImg: {
    height: 40,
    width: 40,
    backgroundColor: '#ffffff50',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 10,
    right: '5%',
    top: '3%',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 10,
  },
  titleH1: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titleTxt: {
    fontSize: 12,
    lineHeight: 12,
    color: '#9b9b9b',
  },
  btnViewAll: {
    height: 20,
  },
  txtBtn: {
    fontSize: 12,
    lineHeight: 12,
    color: 'black',
    textTransform: 'capitalize',
  },
});
