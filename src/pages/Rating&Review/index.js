import React, {Component} from 'react';
import {Button, Content, Text, View} from 'native-base';
import {} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

// Import Component
import WriteReview from '../../Components/BottomSheets/WriteReview';

import CardReviews from '../../Components/CardReviews';
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
