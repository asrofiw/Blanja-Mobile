import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Content} from 'native-base';
// import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

// Import component
import CardCatalogGrid from '../../Components/CardCatalogGrid';
import CardCatalogList from '../../Components/CardCatalogList';
import SortBy from '../../Components/BottomSheets/SortBy';

// Import default image product
import noImg from '../../assets/images/no_img.png';

export class Catalog extends Component {
  sheetRef = React.createRef();

  header = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  state = {
    isGrid: true,
    isList: false,
  };

  changeDisplay = () => {
    this.setState({
      isGrid: !this.state.isGrid,
      isList: !this.state.isList,
    });
  };
  render() {
    const {isGrid, isList} = this.state;

    return (
      <View style={styles.parent}>
        <BottomSheet
          ref={this.sheetRef}
          snapPoints={[-50, 300]}
          initialSnap={0}
          renderContent={SortBy}
          renderHeader={this.header}
          enabledInnerScrolling={false}
        />
        <View style={styles.top}>
          <View style={styles.topInside}>
            <Button transparent style={styles.btn}>
              <Icon name="filter-variant" size={20} color="black" />
              <Text style={styles.txt}> Filters </Text>
            </Button>
            <Button
              transparent
              style={styles.btn}
              onPress={() => this.sheetRef.current.snapTo(1)}>
              <Icon name="sort" size={20} color="black" />
              <Text style={styles.txt}> Sort </Text>
            </Button>
            <Button
              transparent
              style={styles.btnIcon}
              onPress={this.changeDisplay}>
              {isGrid && <Icon name="view-list" size={20} color="black" />}
              {isList && <Icon name="view-module" size={20} color="black" />}
            </Button>
          </View>
        </View>
        <Content>
          {isGrid && (
            <View style={styles.bodyGrid}>
              <CardCatalogGrid
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogGrid
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogGrid
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogGrid
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogGrid
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogGrid
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogGrid
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogGrid
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogGrid
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogGrid
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
            </View>
          )}
          {isList && (
            <View style={styles.bodyList}>
              <CardCatalogList
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogList
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogList
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogList
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogList
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogList
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogList
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogList
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogList
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
              <CardCatalogList
                btnOnPress={() =>
                  this.props.navigation.navigate('DetailProduct', {
                    id: 1,
                  })
                }
                img={noImg}
                subCategory="Shoes"
                productName="Shoes"
                price={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 1,
                }).format(100000)}
              />
            </View>
          )}
        </Content>
      </View>
    );
  }
}

export default Catalog;
