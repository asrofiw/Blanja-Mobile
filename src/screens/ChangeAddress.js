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
import {StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  wrapperTop: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  item: {
    marginTop: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1.5,
  },
  label: {
    color: '#9b9b9b',
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: 'black',
  },
  btn: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#273AC7',
  },
})
