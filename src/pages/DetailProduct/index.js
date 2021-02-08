import React, {Component} from 'react';
import {Text, View, Container, Content, Footer, H1, Button} from 'native-base';
import {Alert, Image, ScrollView} from 'react-native';
import styles from './style/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {API_URL} from '@env';
// import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

// Import Action
import itemsAction from '../../redux/actions/items';
import cartAction from '../../redux/actions/cart';

// Import Component
import CardProduct from '../../Components/CardProduct';
import SelectSize from '../../Components/BottomSheets/SelectSize';
import SelectColor from '../../Components/BottomSheets/SelectColor';

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
                  maximumSignificantDigits: 1,
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
          <ScrollView horizontal style={styles.scrollView}>
            {!isLoading &&
              !isError &&
              data.length !== 0 &&
              data.map((items) => (
                <CardProduct
                  btnOnPress={() =>
                    this.props.navigation.replace('DetailProduct', {
                      id: items.id,
                    })
                  }
                  img={items.image? {uri: `${API_URL}${items.image}`} : `${noImg}`}
                  subCategory={items.sub_category}
                  productName={items.name}
                  price={new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    maximumSignificantDigits: 1,
                  }).format(items.price)}
                />
              ))}
            {isLoading && !isError && <Text>Loading</Text>}
            {isError && alertMsg !== '' && <Text>{alertMsg}</Text>}
          </ScrollView>
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
