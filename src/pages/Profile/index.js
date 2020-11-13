import React, {Component} from 'react';
import {Image} from 'react-native';
import {View, Text, Container, Content, H1, Button} from 'native-base';
import {connect} from 'react-redux';
import styles from './style/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import Action
import authAction from '../../redux/actions/auth';

// Import Image
import defaultAvatar from '../../assets/images/default-avatar.jpg';

class Profile extends Component {
  logout = () => {
    this.props.logout();
  };
  render() {
    return (
      <Container style={styles.parent}>
        <Content>
          <View>
            <H1 style={styles.title}>My Profile</H1>
          </View>
          <Button full transparent style={styles.btnProfile}>
            <Image style={styles.img} source={defaultAvatar} />
            <View>
              <Text style={styles.txtName}>Name</Text>
              <Text style={styles.txtEmail}>email@mail.com</Text>
            </View>
          </Button>
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
              <Text style={styles.txtChild}>password</Text>
            </View>
            <View>
              <Icon name="chevron-right" color="#9B9B9B" size={25} />
            </View>
          </Button>
          <Button
            full
            transparent
            style={styles.btn}
            onPress={() => this.props.logout()}>
            <View>
              <Text style={styles.txtTitle}>Logout</Text>
            </View>
            <View>
              <Icon name="chevron-right" color="#9B9B9B" size={25} />
            </View>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  logout: authAction.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
