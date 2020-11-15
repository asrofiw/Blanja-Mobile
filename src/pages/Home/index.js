import React, {Component} from 'react';
import {ScrollView, Image} from 'react-native';
import {Button, Container, Content, H1, Spinner, Text, View} from 'native-base';
import {connect} from 'react-redux';
import styles from './style/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Action
import itemsAction from '../../redux/actions/items';

// Import Component
import CardProduct from '../../Components/CardProduct';

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
          <ScrollView horizontal>
            {!isLoading &&
              !isError &&
              dataNewest.length !== 0 &&
              dataNewest.map((items) => (
                <CardProduct
                  btnOnPress={() =>
                    this.props.navigation.navigate('DetailProduct', {
                      id: items.id,
                    })
                  }
                  img={noImg}
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
          <ScrollView horizontal>
            {!isLoading &&
              !isError &&
              data.length !== 0 &&
              data.map((items) => (
                <CardProduct
                  btnOnPress={() =>
                    this.props.navigation.navigate('DetailProduct', {
                      id: items.id,
                    })
                  }
                  img={noImg}
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
