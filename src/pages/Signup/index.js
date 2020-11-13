import React, {Component} from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Header,
  Left,
  Body,
  Right,
  Text,
  H1,
  View,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style/style';

class Signup extends Component {
  render() {
    return (
      <Container>
        <Header transparent>
          <Left>
            <Button transparent>
              <Icon name="chevron-left" size={30} color="black" />
            </Button>
          </Left>
          <Body />
          <Right />
        </Header>
        <Content style={styles.parent}>
          <View>
            <View>
              <H1 style={styles.title}>Sign Up</H1>
            </View>
            <Form>
              <Item floatingLabel style={styles.itemForm}>
                <Label style={styles.txtLabel}>Name</Label>
                <Input />
              </Item>
              <Item floatingLabel style={styles.itemForm}>
                <Label style={styles.txtLabel}>Email</Label>
                <Input />
              </Item>
              <Item floatingLabel style={styles.itemForm}>
                <Label style={styles.txtLabel}>Password</Label>
                <Input secureTextEntry={true} />
              </Item>
              <View style={styles.linkForgot}>
                <Text style={styles.txtForgot}>Already have an account?</Text>
                <Button transparent>
                  <Icon name="arrow-right" size={20} color="#273AC7" />
                </Button>
              </View>
              <Button rounded block primary style={styles.btnSignup}>
                <Text>Sign Up</Text>
              </Button>
            </Form>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Signup;
