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
import {TouchableWithoutFeedback, Keyboard, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import action
import authAction from '../redux/actions/auth';

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

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 34,
    marginBottom: 70,
  },
  itemInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 65,
    paddingHorizontal: 20,
    borderColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 2,
    shadowRadius: 5,
    elevation: 2,
  },
  borderErr: {
    borderColor: 'red',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 65,
    paddingHorizontal: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 2,
    shadowRadius: 5,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#9b9b9b',
    marginHorizontal: 20,
    top: 10,
  },
  input: {
    fontSize: 16,
  },
  btnLogin: {
    backgroundColor: '#273AC7',
    height: 48,
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 10,
    marginBottom: 20,
  },
  linkForgot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  btnForgot: {
    height: 15,
  },
  txtForgot: {
    fontSize: 14,
    fontFamily: 'Metropolis',
    textTransform: 'lowercase',
  },
  toast: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  txtError: {
    fontSize: 12,
    color: 'red',
    marginTop: 2,
    marginBottom: 5,
    textAlign: 'right',
    marginLeft: 5,
  },
});
