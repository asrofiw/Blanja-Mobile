import React, {Component} from 'react';
import {Image} from 'react-native';
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
import styles from './style/style';

// Import Image
import defaultAvatar from '../../assets/images/default-avatar.jpg';

export class SettingsScreen extends Component {
  render() {
    return (
      <Container style={styles.parent}>
        <Content>
          <View>
            <H1 style={styles.title}>Settings</H1>
          </View>
          <View>
            <H3 style={styles.subTitle}>Personal Information</H3>
          </View>
          <View style={styles.imgWrapper}>
            <Image style={styles.img} source={defaultAvatar} />
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
            <Button transparent light>
              <Text style={styles.txtBtn}>Change</Text>
            </Button>
          </View>
          <Item regular floatingLabel style={styles.itemInput}>
            <Label style={styles.label}>Password</Label>
            <Input style={styles.input} secureTextEntry />
          </Item>
        </Content>
      </Container>
    );
  }
}

export default SettingsScreen;
