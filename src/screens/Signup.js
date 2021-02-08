import React, {Component} from 'react';
import {
  Item,
  Input,
  Label,
  Button,
  Text,
  H1,
  View,
  Toast,
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
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

class Signup extends Component {
  componentDidUpdate() {
    const {
      isSuccessRegister,
      isFailedRegister,
      alertMsgRegister,
    } = this.props.auth;
    if (isSuccessRegister || isFailedRegister) {
      Toast.show({
        text: alertMsgRegister,
        buttonText: 'Ok',
        style: styles.toast,
      });
      if (isSuccessRegister) {
        this.props.navigation.navigate('Login');
      }
      this.props.clearMsgRegister();
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Content style={styles.parent}>
          <View>
            <H1 style={styles.title}>Sign up</H1>
          </View>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            validationSchema={formSchema}
            onSubmit={async (values) => {
              Keyboard.dismiss();
              try {
                await this.props.register(values);
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
                    touched.name && errors.name
                      ? styles.borderErr
                      : styles.itemInput
                  }>
                  <Label style={styles.label}>Name</Label>
                  <Input
                    style={styles.input}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                </Item>
                <Text style={styles.txtError}>
                  {touched.name && errors.name}
                </Text>
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
                <View style={styles.linkAccount}>
                  <Button
                    dark
                    transparent
                    style={styles.btnLinkAccount}
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.txtLinkAccount}>
                      Already have an account?
                    </Text>
                    <Icon name="arrow-right" size={15} color="#273AC7" />
                  </Button>
                </View>
                <Button
                  dark
                  rounded
                  block
                  style={styles.btnSignup}
                  onPress={handleSubmit}>
                  <Text>Sign up</Text>
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
  register: authAction.register,
  clearMsgRegister: authAction.clearMessageRegister,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

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
  btnSignup: {
    backgroundColor: '#273AC7',
    height: 48,
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 10,
    marginBottom: 20,
  },
  linkAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  btnLinkAccount: {
    height: 15,
  },
  txtLinkAccount: {
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
