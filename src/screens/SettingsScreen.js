import React, {Component} from 'react';
import {
  Button,
  Container,
  Content,
  H1,
  H3,
  Input,
  Item,
  Label,
  Text,
  View,
  Toast,
} from 'native-base';
import {TouchableWithoutFeedback, Keyboard, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';

// import component
import PasswordChange from '../Components/BottomSheets/PasswordChange';

// Import Action
import profileAction from '../redux/actions/profile';

const formSchema = yup.object({
  name: yup.string().required('name required'),
  email: yup.string().email('must be your@email.com'),
  // phone: yup.string(),
  // gender: yup.string(),
  // dateOfBirth: yup.string(),
});

export class SettingsScreen extends Component {
  sheetRef = React.createRef();

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  fall = new Animated.Value(1);

  componentDidUpdate() {
    const {isUpdate, isErrorUpdate, updateMsg} = this.props.profile;
    const {token} = this.props.auth;
    if (isUpdate || isErrorUpdate) {
      Toast.show({
        style: styles.toast,
        text: updateMsg,
        buttonText: 'Ok',
      });
      if (isUpdate) {
        try {
          this.props.getProfile(token);
        } catch (e) {
          console.log(e.message);
        }
      }
      this.props.clearMsg();
    }
  }

  render() {
    console.log(this.props.profile.dataProfile);
    const {
      name,
      email,
      phone,
      gender,
      dateOfBirth,
    } = this.props.profile.dataProfile;
    const {token} = this.props.auth;
    return (
      <Container style={styles.parent}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <View style={styles.body}>
              <View>
                <H1 style={styles.title}>Settings</H1>
              </View>
              <Formik
                initialValues={{
                  name: name,
                  email: email,
                  phone: phone,
                  gender: gender,
                  dateOfBirth: dateOfBirth,
                }}
                validationSchema={formSchema}
                onSubmit={async (values) => {
                  try {
                    Keyboard.dismiss();
                    let data = {
                      name: values.name,
                      email: values.email,
                      phone_number: values.phone,
                      gender: values.gender,
                      date_of_birth: values.dateOfBirth,
                    };

                    if (values.email === email) {
                      delete data.email;
                    }
                    Object.entries(data).map((e, i) => {
                      e.map((element, index) => console.log(element, index));
                    });
                    await this.props.updateProfile(token, data);
                    console.log(data);
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
                    <View style={styles.subTitleBtn}>
                      <H3 style={styles.subTitle}>Personal Information</H3>
                      <Button transparent light onPress={handleSubmit}>
                        <Text style={styles.txtBtn}>Save</Text>
                      </Button>
                    </View>
                    <Item
                      regular
                      floatingLabel
                      style={
                        touched.name && errors.name
                          ? styles.borderErr
                          : styles.itemInput
                      }>
                      <Label style={styles.label}>Full Name</Label>
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
                        touched.phone && errors.phone
                          ? styles.borderErr
                          : styles.itemInput
                      }>
                      <Label style={styles.label}>Phone</Label>
                      <Input
                        style={styles.input}
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        value={values.phone}
                      />
                    </Item>
                    <Text style={styles.txtError}>
                      {touched.phone && errors.phone}
                    </Text>
                    <Item
                      regular
                      floatingLabel
                      style={
                        touched.gender && errors.gender
                          ? styles.borderErr
                          : styles.itemInput
                      }>
                      <Label style={styles.label}>Gender</Label>
                      <Input
                        style={styles.input}
                        onChangeText={handleChange('gender')}
                        onBlur={handleBlur('gender')}
                        value={values.gender}
                      />
                    </Item>
                    <Text style={styles.txtError}>
                      {touched.gender && errors.gender}
                    </Text>
                    <Item
                      regular
                      floatingLabel
                      style={
                        touched.dateOfBirth && errors.dateOfBirth
                          ? styles.borderErr
                          : styles.itemInput
                      }>
                      <Label style={styles.label}>Date of Birth</Label>
                      <Input
                        style={styles.input}
                        onChangeText={handleChange('dateOfBirth')}
                        onBlur={handleBlur('dateOfBirth')}
                        value={values.dateOfBirth}
                      />
                    </Item>
                    <Text style={styles.txtError}>
                      {touched.dateOfBirth && errors.dateOfBirth}
                    </Text>
                  </View>
                )}
              </Formik>
              <View style={styles.subTitleBtn}>
                <View>
                  <H3 style={styles.subTitlePass}>Password</H3>
                </View>
                <Button
                  transparent
                  light
                  onPress={() => this.sheetRef.current.snapTo(1)}>
                  <Text style={styles.txtBtn}>Change</Text>
                </Button>
              </View>
              <Item regular floatingLabel style={styles.itemInputPass}>
                <Label style={styles.label}>Password</Label>
                <Input
                  style={styles.input}
                  secureTextEntry
                  value="0000000000"
                  disabled
                />
              </Item>
            </View>
          </Content>
        </TouchableWithoutFeedback>
        <BottomSheet
          ref={this.sheetRef}
          snapPoints={[-50, 350, 500]}
          initialSnap={0}
          renderContent={PasswordChange}
          renderHeader={this.renderHeader}
          callbackNode={this.fall}
          enabledInnerScrolling={false}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = {
  getProfile: profileAction.getProfile,
  updateProfile: profileAction.updateProfile,
  clearMsg: profileAction.clearMessageStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  body: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  imgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    width: 64,
    height: 64,
    borderRadius: 50,
  },
  itemInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 65,
    paddingHorizontal: 20,
    marginBottom: 2,
  },
  itemInputPass: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 65,
    paddingHorizontal: 20,
    marginBottom: 20,
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
    fontSize: 14,
  },
  subTitlePass: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  subTitleBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  txtBtn: {
    textTransform: 'capitalize',
  },
  txtError: {
    fontSize: 12,
    color: 'red',
    marginTop: 2,
    marginBottom: 5,
    textAlign: 'right',
    marginLeft: 5,
  },
  header: {
    backgroundColor: '#f9f9f9',
    shadowColor: '#000000',
    paddingTop: 10,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 60,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#9b9b9b',
    marginBottom: 10,
  },
  toast: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
});
