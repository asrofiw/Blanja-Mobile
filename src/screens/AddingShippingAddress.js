import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import {
  Text,
  Container,
  Content,
  Item,
  Label,
  Input,
  Button,
  ListItem,
  CheckBox,
  Body,
} from 'native-base';

export class AddingShippingAddress extends Component {
  state = {
    primaryIsChecked: false,
  };

  render() {
    const {primaryIsChecked} = this.state;
    return (
      <Container style={styles.parent}>
        <Content>
          <Item regular floatingLabel style={styles.itemInput}>
            <Label style={styles.label}>
              Save address as (ex: Home, Office)
            </Label>
            <Input style={styles.input} />
          </Item>
          <Item regular floatingLabel style={styles.itemInput}>
            <Label style={styles.label}>Recipient&apos;s name</Label>
            <Input style={styles.input} />
          </Item>
          <Item regular floatingLabel style={styles.itemInput}>
            <Label style={styles.label}>Recipient&apos;s phone</Label>
            <Input style={styles.input} />
          </Item>
          <Item regular floatingLabel style={styles.itemInput}>
            <Label style={styles.label}>Address</Label>
            <Input style={styles.input} />
          </Item>
          <Item regular floatingLabel style={styles.itemInput}>
            <Label style={styles.label}>Postal code</Label>
            <Input style={styles.input} />
          </Item>
          <Item regular floatingLabel style={styles.itemInput}>
            <Label style={styles.label}>City</Label>
            <Input style={styles.input} />
          </Item>
          <ListItem>
            <CheckBox
              color="#273AC7"
              checked={primaryIsChecked}
              onPress={() =>
                this.setState({primaryIsChecked: !primaryIsChecked})
              }
            />
            <Body>
              <Text>Make it primary address</Text>
            </Body>
          </ListItem>
          <Button full rounded style={styles.btn}>
            <Text>Save Address</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default AddingShippingAddress;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  itemInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 65,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#9b9b9b',
    marginHorizontal: 20,
    top: 10,
  },
  input: {
    fontSize: 14,
  },
  btn: {
    marginTop: 30,
    backgroundColor: '#273AC7',
  },
})
