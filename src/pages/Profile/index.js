import React, {Component} from 'react';
import {Image, Modal} from 'react-native';
import {View, Text, Container, Content, H1, Button, Toast} from 'native-base';
import {connect} from 'react-redux';
import styles from './style/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import storage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-picker';
import {API_URL} from '@env';

// Import Action
import authAction from '../../redux/actions/auth';
import profileAction from '../../redux/actions/profile';

class Profile extends Component {
  componentDidMount() {
    try {
      const {token} = this.props.auth;
      this.props.getProfile(token);
    } catch (e) {
      console.log(e.message);
    }
  }

  state = {
    modalVisible: false,
    picture: null,
  };

  savePicture = () => {
    try {
      // const filterType = ['image/png', 'image/jpg', 'image/jpeg'];
      const {token} = this.props.auth;
      const {picture} = this.state;
      if (picture.fileSize > 2000000) {
        Toast.show({
          style: styles.toast,
          text: 'Limit file size 2 mb',
          buttonText: 'Ok',
        });
      } else if (picture.type !== 'image/png') {
        Toast.show({
          style: styles.toast,
          text: 'File must be an image',
          buttonText: 'Ok',
        });
      } else {
        const form = new FormData();
        form.append('picture', {
          uri: picture.uri,
          type: picture.type,
          name: picture.fileName,
        });
        this.props.updatePicture(token, form);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  handleChoosePhoto = () => {
    const option = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(option, (res) => {
      console.log(res);
      if (res.uri) {
        this.setState({picture: res});
        this.savePicture();
      }
    });
  };

  handleCamera = () => {
    const option = {
      noData: true,
    };
    ImagePicker.launchCamera(option, (res) => {
      console.log(res);
      // if (res.uri) {
      //   this.setState({picture: res});
      //   this.savePicture();
      // }
    });
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  logoutHandle = () => {
    this.props.logout();
    storage.removeItem('persist:root');
    Toast.show({
      style: styles.toast,
      text: 'Logout successfully',
      buttonText: 'Ok',
    });
  };

  componentDidUpdate() {
    const {isUpdate, isErrorUpdate, updateMsg} = this.props.profile;
    const {token} = this.props.auth;
    const {modalVisible} = this.state;
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
      this.setModalVisible(!modalVisible);
    }
  }

  render() {
    console.log(this.props.profile);
    let {name, email, image} = this.props.profile.dataProfile;
    const {modalVisible} = this.state;

    return (
      <Container style={styles.parent}>
        <Content>
          <View>
            <H1 style={styles.title}>My Profile</H1>
          </View>
          <View style={styles.headProfile}>
            <Button
              transparent
              style={styles.wrapperImg}
              onPress={() => {
                this.setModalVisible(true);
              }}>
              <Image
                style={styles.img}
                source={
                  image
                    ? {uri: `${API_URL}${image}`}
                    : require('../../assets/images/default-avatar.png')
                }
              />
              <View style={styles.icon}>
                <Icon name="pencil" size={15} color="grey" />
              </View>
            </Button>
            <View>
              <Text style={styles.txtName}>{name}</Text>
              <Text style={styles.txtEmail}>{email}</Text>
            </View>
          </View>
          <Button
            full
            transparent
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('MyOrders')}>
            <View>
              <Text style={styles.txtTitle}>My Orders</Text>
              <Text style={styles.txtChild}>Already have 12 orders</Text>
            </View>
            <View>
              <Icon name="chevron-right" color="#9B9B9B" size={25} />
            </View>
          </Button>
          <Button
            full
            transparent
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('ShippingAddress')}>
            <View>
              <Text style={styles.txtTitle}>Shipping Address</Text>
              <Text style={styles.txtChild}>3 addresses</Text>
            </View>
            <View>
              <Icon name="chevron-right" color="#9B9B9B" size={25} />
            </View>
          </Button>
          <Button
            full
            transparent
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('SettingsScreen')}>
            <View>
              <Text style={styles.txtTitle}>Settings</Text>
              <Text style={styles.txtChild}>
                Personal information, password, balance
              </Text>
            </View>
            <View>
              <Icon name="chevron-right" color="#9B9B9B" size={25} />
            </View>
          </Button>
          <Button
            full
            transparent
            style={styles.btn}
            onPress={this.logoutHandle}>
            <View>
              <Text style={styles.txtTitleLogout}>Logout</Text>
            </View>
            <View>
              <Icon name="chevron-right" color="#9B9B9B" size={25} />
            </View>
          </Button>
          <Modal
            animationType="slide"
            statusBarTranslucent={false}
            transparent={true}
            visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Button
                  full
                  transparent
                  style={styles.btnOnModal}
                  onPress={this.handleChoosePhoto}>
                  <Text style={styles.txtBtnModal}>Choose Image</Text>
                </Button>
                <Button
                  full
                  transparent
                  style={styles.btnOnModal}
                  onPress={this.handleCamera}>
                  <Text style={styles.txtBtnModal}>Camera</Text>
                </Button>
                <Button
                  full
                  transparent
                  style={styles.btnOnModal}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.txtBtnModal}>Cancel</Text>
                </Button>
              </View>
            </View>
          </Modal>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = {
  logout: authAction.logout,
  getProfile: profileAction.getProfile,
  updatePicture: profileAction.updatePicture,
  clearMsg: profileAction.clearMessageStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
