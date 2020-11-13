import React, {Component} from 'react';
import {Form, Item, Input, Label, Button, Text, H1, View} from 'native-base';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import authAction from '../../redux/actions/auth';

import styles from './style/style';

class Login extends Component {
  state = {
    email: '',
    password: '',
    alertMsg: '',
    showToast: false,
  };

  login = async () => {
    const {email, password} = this.state;
    await this.props.login(email, password);
  };

  showAlert = () => {
    const {isError} = this.props.auth;
    if (isError || !isError) {
      const {alertMsg} = this.props.auth;
      if (alertMsg !== this.state.alertMsg) {
        this.setState({alertMsg});
        Alert.alert(alertMsg);
      }
    }
  };

  render() {
    return (
      <View style={styles.parent}>
        <View>
          <H1 style={styles.title}>Login</H1>
        </View>
        <Form>
          <Item regular floatingLabel style={styles.itemInput}>
            <Label style={styles.label}>Email</Label>
            <Input
              style={styles.input}
              onChangeText={(email) => this.setState({email})}
            />
          </Item>
          <Item regular floatingLabel style={styles.itemInput}>
            <Label style={styles.label}>Password</Label>
            <Input
              style={styles.input}
              onChangeText={(password) => this.setState({password})}
              secureTextEntry
            />
          </Item>
          <View style={styles.linkForgot}>
            <Text style={styles.txtForgot}>Forgot your password?</Text>
            <Button transparent>
              <Icon name="arrow-right" size={15} color="#273AC7" />
            </Button>
          </View>
          <Button
            rounded
            block
            primary
            style={styles.btnLogin}
            onPress={this.login}>
            <Text>Login</Text>
          </Button>
        </Form>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({auth: state.auth});
const mapDispatchToProps = {
  login: authAction.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
