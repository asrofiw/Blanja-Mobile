import React, {Component} from 'react';
import {
  Button,
  Container,
  Content,
  H1,
  H3,
  Input,
  Item,
  Label,
  Text,
  View,
} from 'native-base';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import styles from './style/style';

// import component
import PasswordChange from '../../Components/BottomSheets/PasswordChange';

export class SettingsScreen extends Component {
  sheetRef = React.createRef();

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  fall = new Animated.Value(1);

  render() {
    return (
      <Container style={styles.parent}>
        <Content>
          <View style={styles.body}>
            <View>
              <H1 style={styles.title}>Settings</H1>
            </View>
            <View>
              <H3 style={styles.subTitle}>Personal Information</H3>
            </View>
            <Item regular floatingLabel style={styles.itemInput}>
              <Label style={styles.label}>Full Name</Label>
              <Input style={styles.input} />
            </Item>
            <Item regular floatingLabel style={styles.itemInput}>
              <Label style={styles.label}>Email</Label>
              <Input style={styles.input} />
            </Item>
            <Item regular floatingLabel style={styles.itemInput}>
              <Label style={styles.label}>Phone</Label>
              <Input style={styles.input} />
            </Item>
            <Item regular floatingLabel style={styles.itemInput}>
              <Label style={styles.label}>Gender</Label>
              <Input style={styles.input} />
            </Item>
            <Item regular floatingLabel style={styles.itemInput}>
              <Label style={styles.label}>Date of Birth</Label>
              <Input style={styles.input} />
            </Item>
            <View style={styles.subTitleBtn}>
              <View>
                <H3 style={styles.subTitlePass}>Password</H3>
              </View>
              <Button
                transparent
                light
                onPress={() => this.sheetRef.current.snapTo(1)}>
                <Text style={styles.txtBtn}>Change</Text>
              </Button>
            </View>
            <Item regular floatingLabel style={styles.itemInput}>
              <Label style={styles.label}>Password</Label>
              <Input style={styles.input} secureTextEntry />
            </Item>
          </View>
        </Content>
        <BottomSheet
          ref={this.sheetRef}
          snapPoints={[-50, 350, 500]}
          initialSnap={0}
          renderContent={PasswordChange}
          renderHeader={this.renderHeader}
          callbackNode={this.fall}
          enabledInnerScrolling={false}
        />
      </Container>
    );
  }
}

export default SettingsScreen;
