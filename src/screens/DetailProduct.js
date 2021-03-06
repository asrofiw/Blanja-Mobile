import React, {Component} from 'react';
import {Text, View, Container, Content, Footer, H1, Button} from 'native-base';
import {Alert, Image, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {API_URL} from '@env';
// import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

// Import Action
import itemsAction from '../redux/actions/items';
import cartAction from '../redux/actions/cart';

// Import Component
import CardProduct from '../Components/CardProduct';
import SelectSize from '../Components/BottomSheets/SelectSize';
import SelectColor from '../Components/BottomSheets/SelectColor';

// Import default image product
import noImg from '../../assets/images/no_img.png';

export class DetailProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      alertMsg: '',
      isSuccess: false,
    };
  }

  selectSize = React.createRef();
  selectColor = React.createRef();

  header = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  async componentDidMount() {
    const {id} = this.props.route.params;
    await this.props.getDataDetail(id);
    await this.props.getItems();
  }

  addCart = async () => {
    const {token} = this.props.auth;
    const {quantity} = this.state;
    const {id} = this.props.route.params;
    const data = {
      idItem: id,
      quantity,
    };
    await this.props.postCart(token, data);
    this.showAlert();
  };

  showAlert = () => {
    const {alertMsg, isSuccess} = this.props.cart;
    if (alertMsg !== this.state.alertMsg) {
      this.setState({alertMsg});
      Alert.alert(alertMsg);
    }
    if (isSuccess) {
      this.props.navigation.replace('Home');
    }
  };

  render() {
    const {data, dataDetail, isLoading, isError, alertMsg} = this.props.items;
    console.log(dataDetail)
    return (
      <Container style={styles.parent}>
        <BottomSheet
          ref={this.selectSize}
          snapPoints={[-50, 200]}
          initialSnap={0}
          renderContent={SelectSize}
          renderHeader={this.header}
          enabledInnerScrolling={false}
        />
        <BottomSheet
          ref={this.selectColor}
          snapPoints={[-50, 200]}
          initialSnap={0}
          renderContent={SelectColor}
          renderHeader={this.header}
          enabledInnerScrolling={false}
        />
        <Content>
          <Image
            style={styles.imgProduct}
            source={!dataDetail.url ? noImg : {uri: `${API_URL}${dataDetail.url[0]}`}}
          />
          <View style={styles.wrapperBtn}>
            <Button
              style={styles.btn}
              onPress={() => this.selectSize.current.snapTo(1)}>
              <Text style={styles.txtBtn}>Size</Text>
              <Icon name="chevron-down" size={20} />
            </Button>
            <Button
              style={styles.btn}
              onPress={() => this.selectColor.current.snapTo(1)}>
              <Text style={styles.txtBtn}>Color</Text>
              <Icon name="chevron-down" size={20} />
            </Button>
            <Button rounded style={styles.btnLove}>
              <Icon name="heart-outline" size={20} />
            </Button>
          </View>
          <View style={styles.wrapperTop}>
            <View>
              <H1 style={styles.txtStore}>{dataDetail.name}</H1>
              <Text style={styles.txtProduct}>{dataDetail.sub_category}</Text>
              <View style={styles.wrapperRate}>
                <Icon name="star" color="yellow" size={20} />
                <Icon name="star" color="yellow" size={20} />
                <Icon name="star" color="yellow" size={20} />
                <Icon name="star" color="yellow" size={20} />
                <Icon name="star" color="yellow" size={20} />
                <Text style={styles.txtRate}>(10)</Text>
              </View>
            </View>
            <View>
              <Text style={styles.price}>
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 3,
                }).format(dataDetail.price)}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.txtDescription}>{dataDetail.description}</Text>
          </View>
          <View style={styles.title}>
            <View>
              <H1 style={styles.titleH1}>You can also like this</H1>
            </View>
            <View>
              <Text style={styles.txtTitle}>12 items</Text>
            </View>
          </View>
          <FlatList
            style={styles.scrollView}
            showsHorizontalScrollIndicator={false}
            horizontal 
            data={data} 
            renderItem={({item}) => 
            <CardProduct
              btnOnPress={() =>
                this.props.navigation.replace('DetailProduct', {
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
        <Footer style={styles.footer}>
          <Button full rounded style={styles.btnFooter} onPress={this.addCart}>
            <Text style={styles.txtBtnFooter}>Add to cart</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  items: state.items,
  cart: state.cart,
});

const mapDispatchToProps = {
  getDataDetail: itemsAction.getDataDetail,
  getItems: itemsAction.getData,
  postCart: cartAction.postCart,
  clearMessage: cartAction.clearMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollView: {
    paddingStart: 20,
    paddingEnd: 20,
  },
  imgProduct: {
    height: 336,
    width: '100%',
  },
  wrapperBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  btn: {
    height: 40,
    width: 138,
    marginRight: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  txtBtn: {
    fontSize: 14,
    lineHeight: 14,
    color: 'black',
    textTransform: 'capitalize',
  },
  btnLove: {
    width: 36,
    height: 36,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  wrapperTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  txtStore: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  txtProduct: {
    fontSize: 12,
    lineHeight: 12,
    color: '#9b9b9b',
    marginBottom: 7,
  },
  wrapperRate: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  txtRate: {
    fontSize: 11,
    lineHeight: 11,
    color: '#9b9b9b',
    marginLeft: 5,
    paddingBottom: 2,
  },
  price: {
    fontSize: 24,
    color: '#273AC7',
    fontWeight: 'bold',
  },
  txtDescription: {
    fontSize: 14,
    paddingHorizontal: 20,
    textAlign: 'justify',
    marginBottom: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleH1: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  txtTitle: {
    fontSize: 12,
    lineHeight: 12,
    color: 'black',
    textTransform: 'capitalize',
  },
  footer: {
    backgroundColor: 'white',
    padding: 20,
    height: 90,
  },
  btnFooter: {
    width: '100%',
    backgroundColor: '#273AC7',
  },
  header: {
    backgroundColor: '#f9f9f9',
    shadowColor: '#000000',
    paddingTop: 10,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 60,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#9b9b9b',
    marginBottom: 10,
  },
});
