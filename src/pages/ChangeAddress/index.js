import {
  Button,
  Container,
  Content,
  Input,
  Item,
  Label,
  Text,
  View,
} from 'native-base';
import React, {Component} from 'react';
import {} from 'react-native';
import styles from './style';

export class ChangeAddress extends Component {
  render() {
    return (
      <Container style={styles.parent}>
        <Content>
          <View style={styles.wrapperTop}>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>
                Save address as(ex: Home, Office)
              </Label>
              <Input style={styles.input} />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Recipient&apos;s name</Label>
              <Input style={styles.input} />
            </Item>
          </View>
          <View style={styles.wrapperTop}>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Address</Label>
              <Input style={styles.input} />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>City or Subdistrict</Label>
              <Input style={styles.input} />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Postal code</Label>
              <Input style={styles.input} />
            </Item>
          </View>
          <View style={styles.wrapperTop}>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Recipient&apos;s phone number</Label>
              <Input style={styles.input} />
            </Item>
          </View>
          <Button full rounded style={styles.btn}>
            <Text>Save Address</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default ChangeAddress;
