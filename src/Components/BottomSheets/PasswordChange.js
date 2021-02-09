import React from 'react';
import {TouchableWithoutFeedback, Keyboard, StyleSheet} from 'react-native';
import {View, Text, H1, Item, Label, Input, Button, Content} from 'native-base';
import {Formik} from 'formik';
import * as yup from 'yup';

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

export default PasswordChange;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#f9f9f9',
    height: 700,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 18,
    textAlign: 'center',
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
  btnSave: {
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
    marginBottom: 10,
    textAlign: 'right',
    marginLeft: 5,
  },
})
