import React, {Component} from 'react';
import {
  Toast,
  Item,
  Input,
  Label,
  Button,
  Text,
  H1,
  View,
  Content,
} from 'native-base';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style/style';

// Import action
import authAction from '../../redux/actions/auth';

const formSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

class Login extends Component {
  componentDidUpdate() {
    const {isSuccessLogin, isError, alertMsg} = this.props.auth;
    if (isSuccessLogin || isError) {
      Toast.show({
        text: alertMsg,
        buttonText: 'Ok',
        style: styles.toast,
      });
      this.props.clearMsgLogin();
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Content style={styles.parent}>
          <View>
            <H1 style={styles.title}>Login</H1>
          </View>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={formSchema}
            onSubmit={async (values) => {
              Keyboard.dismiss();
              try {
                await this.props.login(values);
              } catch (e) {
                console.log(e.message);
              }
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <Item
                  regular
                  floatingLabel
                  style={
                    touched.email && errors.email
                      ? styles.borderErr
                      : styles.itemInput
                  }>
                  <Label style={styles.label}>Email</Label>
                  <Input
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </Item>
                <Text style={styles.txtError}>
                  {touched.email && errors.email}
                </Text>
                <Item
                  regular
                  floatingLabel
                  style={
                    touched.password && errors.password
                      ? styles.borderErr
                      : styles.itemInput
                  }>
                  <Label style={styles.label}>Password</Label>
                  <Input
                    style={styles.input}
                    secureTextEntry
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                </Item>
                <Text style={styles.txtError}>
                  {touched.password && errors.password}
                </Text>
                <View style={styles.linkForgot}>
                  <Button
                    dark
                    transparent
                    style={styles.btnForgot}
                    onPress={() =>
                      this.props.navigation.navigate('ForgotPassword')
                    }>
                    <Text style={styles.txtForgot}>Forgot password?</Text>
                    <Icon name="arrow-right" size={15} color="#273AC7" />
                  </Button>
                </View>
                <Button
                  dark
                  rounded
                  block
                  style={styles.btnLogin}
                  onPress={handleSubmit}>
                  <Text>Login</Text>
                </Button>
              </View>
            )}
          </Formik>
        </Content>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state) => ({auth: state.auth});
const mapDispatchToProps = {
  login: authAction.login,
  clearMsgLogin: authAction.clearMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
