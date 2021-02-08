import React, {Component} from 'react';
import {Item, Input, Label, Button, Text, H1, View, Content} from 'native-base';
import {TouchableWithoutFeedback, Keyboard, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

const formSchema = yup.object({
  email: yup
    .string()
    .email('Not a valid email address. Should be your@email.com')
    .required(),
});

class ForgotPassword extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Content style={styles.parent}>
          <View>
            <H1 style={styles.title}>Forgot Password</H1>
          </View>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={formSchema}
            onSubmit={async (values) => {
              Keyboard.dismiss();
              console.log(values);
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
                <Text style={styles.txt}>
                  Please, enter your email address. You will receive a link to
                  create a new password via email.
                </Text>
                <Item
                  regular
                  floatingLabel
                  style={errors.email ? styles.borderErr : styles.itemInput}>
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
                <Button
                  dark
                  rounded
                  block
                  style={styles.btnSend}
                  onPress={handleSubmit}>
                  <Text>Send</Text>
                </Button>
              </View>
            )}
          </Formik>
        </Content>
      </TouchableWithoutFeedback>
    );
  }
}

export default ForgotPassword;

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
  txt: {
    fontSize: 14,
    textAlign: 'justify',
    marginBottom: 16,
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
  label: {
    fontSize: 14,
    color: '#9b9b9b',
    marginHorizontal: 20,
    top: 10,
  },
  input: {
    fontSize: 16,
  },
  btnSend: {
    backgroundColor: '#273AC7',
    height: 48,
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 10,
    marginBottom: 20,
  },
  toast: {
    marginVertical: 20,
    marginHorizontal: 10,
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
  txtError: {
    fontSize: 12,
    color: 'red',
    marginTop: 2,
    marginBottom: 55,
    textAlign: 'right',
    marginLeft: 5,
  },
});
