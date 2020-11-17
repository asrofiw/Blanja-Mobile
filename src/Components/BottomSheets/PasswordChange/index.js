import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {View, Text, H1, Item, Label, Input, Button, Content} from 'native-base';
import {Formik} from 'formik';
import * as yup from 'yup';
import styles from './style';

const formSchema = yup.object({
  oldPassword: yup.string().required('old password required'),
  newPassword: yup.string().min(8).required('new password required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
});

const PasswordChange = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Content>
        <View style={styles.parent}>
          <View>
            <H1 style={styles.title}>Password Change</H1>
          </View>
          <Formik
            initialValues={{
              oldPassword: '',
              newPassword: '',
              confirmPassword: '',
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
                <Item
                  regular
                  floatingLabel
                  style={
                    touched.oldPassword && errors.oldPassword
                      ? styles.borderErr
                      : styles.itemInput
                  }>
                  <Label style={styles.label}>Old Password</Label>
                  <Input
                    style={styles.input}
                    onChangeText={handleChange('oldPassword')}
                    onBlur={handleBlur('oldPassword')}
                    value={values.oldPassword}
                  />
                </Item>
                <Text style={styles.txtError}>
                  {touched.oldPassword && errors.oldPassword}
                </Text>
                <Item
                  regular
                  floatingLabel
                  style={
                    touched.newPassword && errors.newPassword
                      ? styles.borderErr
                      : styles.itemInput
                  }>
                  <Label style={styles.label}>New Password</Label>
                  <Input
                    style={styles.input}
                    onChangeText={handleChange('newPassword')}
                    onBlur={handleBlur('newPassword')}
                    value={values.newPassword}
                  />
                </Item>
                <Text style={styles.txtError}>
                  {touched.newPassword && errors.newPassword}
                </Text>
                <Item
                  regular
                  floatingLabel
                  style={
                    touched.confirmPassword && errors.confirmPassword
                      ? styles.borderErr
                      : styles.itemInput
                  }>
                  <Label style={styles.label}>Confirm Password</Label>
                  <Input
                    style={styles.input}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                  />
                </Item>
                <Text style={styles.txtError}>
                  {touched.confirmPassword && errors.confirmPassword}
                </Text>
                <Button
                  dark
                  rounded
                  block
                  style={styles.btnSave}
                  onPress={handleSubmit}>
                  <Text>Save Password</Text>
                </Button>
              </View>
            )}
          </Formik>
        </View>
      </Content>
    </TouchableWithoutFeedback>
  );
};

// const styles = StyleSheet.create({
//   parent: {
//     flex: 1,
//     backgroundColor: 'white',
//     height: 1000,
//   },
// })

export default PasswordChange;
