import React, {Component} from 'react';
import {Item, Input, Label, Button, Text, H1, View, Content} from 'native-base';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import styles from './style';

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
