import React, {Component} from 'react';
import {Button, Content, Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

// Import Component
import WriteReview from '../Components/BottomSheets/WriteReview';

import CardReviews from '../Components/CardReviews';
import avaDefault from '../../assets/images/default-avatar.png';

export class RatingReview extends Component {
  writeReview = React.createRef();

  header = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  render() {
    return (
      <View style={styles.parent}>
        <BottomSheet
          ref={this.writeReview}
          snapPoints={[-50, 500]}
          initialSnap={0}
          renderContent={WriteReview}
          renderHeader={this.header}
          enabledInnerScrolling={false}
        />
        <Content>
          <View style={styles.body}>
            <Text style={styles.title}>Rating&Review</Text>
            <View style={styles.wrapperRating}>
              <View style={styles.countRating}>
                <Text style={styles.avgRate}>4.3</Text>
                <Text style={styles.totalRate}>23 ratings</Text>
              </View>
              <View style={styles.rate}>
                <View style={styles.wrapperRate}>
                  <View style={styles.star}>
                    <Icon name="star" size={13} color="#FFBA49" />
                    <Icon name="star" size={13} color="#FFBA49" />
                    <Icon name="star" size={13} color="#FFBA49" />
                    <Icon name="star" size={13} color="#FFBA49" />
                    <Icon name="star" size={13} color="#FFBA49" />
                  </View>
                  <View style={styles.wrapperRateBar}>
                    <View style={styles.rateBar} />
                  </View>
                  <View>
                    <Text style={styles.txtRate}>12</Text>
                  </View>
                </View>

                <View style={styles.wrapperRate}>
                  <View style={styles.star}>
                    <Icon name="star" size={13} color="#FFBA49" />
                    <Icon name="star" size={13} color="#FFBA49" />
                    <Icon name="star" size={13} color="#FFBA49" />
                    <Icon name="star" size={13} color="#FFBA49" />
                  </View>
                  <View style={styles.wrapperRateBar}>
                    <View style={styles.rateBar} />
                  </View>
                  <View>
                    <Text style={styles.txtRate}>12</Text>
                  </View>
                </View>

                <View style={styles.wrapperRate}>
                  <View style={styles.star}>
                    <Icon name="star" size={13} color="#FFBA49" />
                    <Icon name="star" size={13} color="#FFBA49" />
                    <Icon name="star" size={13} color="#FFBA49" />
                  </View>
                  <View style={styles.wrapperRateBar}>
                    <View style={styles.rateBar} />
                  </View>
                  <View>
                    <Text style={styles.txtRate}>12</Text>
                  </View>
                </View>

                <View style={styles.wrapperRate}>
                  <View style={styles.star}>
                    <Icon name="star" size={13} color="#FFBA49" />
                    <Icon name="star" size={13} color="#FFBA49" />
                  </View>
                  <View style={styles.wrapperRateBar}>
                    <View style={styles.rateBar} />
                  </View>
                  <View>
                    <Text style={styles.txtRate}>12</Text>
                  </View>
                </View>

                <View style={styles.wrapperRate}>
                  <View style={styles.star}>
                    <Icon name="star" size={13} color="#FFBA49" />
                  </View>
                  <View style={styles.wrapperRateBar}>
                    <View style={styles.rateBar} />
                  </View>
                  <View>
                    <Text style={styles.txtRate}>12</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.titleReviews}>
              <Text style={styles.countReviews}>8 reviews</Text>
              <View>
                <Text>With photo</Text>
              </View>
            </View>
            <CardReviews
              img={avaDefault}
              name="Helene Moore"
              date="June 5, 2020"
              reviews={
                "The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7\" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well."
              }
            />
            <CardReviews
              img={avaDefault}
              name="Helene Moore"
              date="June 5, 2020"
              reviews={
                "The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7\" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well."
              }
            />
            <CardReviews
              img={avaDefault}
              name="Helene Moore"
              date="June 5, 2020"
              reviews={
                "The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7\" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well."
              }
            />
          </View>
        </Content>
        <View style={styles.footer}>
          <Button
            rounded
            style={styles.btnFooter}
            onPress={() => this.writeReview.current.snapTo(1)}>
            <Icon name="pencil" size={15} color="#ffffff" />
            <Text style={styles.txtFooter}>Write a review</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default RatingReview;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  body: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  wrapperRating: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 35,
  },
  countRating: {
    alignItems: 'flex-start',
    width: '25%',
  },
  avgRate: {
    fontSize: 44,
    fontWeight: 'bold',
  },
  totalRate: {
    fontSize: 16,
    color: '#9b9b9b',
  },
  rate: {
    flexDirection: 'column',
    width: '75%',
  },
  wrapperRate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  wrapperRateBar: {
    width: '60%',
    marginRight: 10,
  },
  rateBar: {
    width: '75%',
    height: 8,
    backgroundColor: '#273AC7',
    borderRadius: 50,
  },
  txtRate: {
    fontSize: 14,
    color: '#4f4f4f',
  },
  titleReviews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  countReviews: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    padding: 10,
  },
  btnFooter: {
    height: 40,
    alignSelf: 'flex-end',
    backgroundColor: '#273AC7',
    padding: 10,
  },
  txtFooter: {
    fontSize: 12,
    textTransform: 'lowercase',
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
})
