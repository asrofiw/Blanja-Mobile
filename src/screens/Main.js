import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';
import {Root, Button, Item, Input} from 'native-base';

import BottomTabs from './BottomTabs';

// Import Pages
import WelcomeScreen from './WelcomeScreen';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import Search from './Search';
import RatingReview from './Rating&Review';

const Stack = createStackNavigator();

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Root>
        <NavigationContainer>
          {!this.props.auth.isLogin ? (
            <Stack.Navigator>
              <Stack.Screen
                options={{headerShown: false}}
                name="WelcomeScreen"
                component={WelcomeScreen}
              />
              <Stack.Screen
                options={{
                  headerBackImage: () => (
                    <Icon name="chevron-left" size={30} color="black" />
                  ),
                  headerTitle: false,
                  headerStyle: {elevation: 0, backgroundColor: '#f9f9f9'},
                }}
                name="Login"
                component={Login}
              />
              <Stack.Screen
                options={{
                  headerBackImage: () => (
                    <Icon name="chevron-left" size={30} color="black" />
                  ),
                  headerTitle: false,
                  headerStyle: {elevation: 0, backgroundColor: '#f9f9f9'},
                }}
                name="Signup"
                component={Signup}
              />
              <Stack.Screen
                options={{
                  headerBackImage: () => (
                    <Icon name="chevron-left" size={30} color="black" />
                  ),
                  headerTitle: false,
                  headerStyle: {elevation: 0, backgroundColor: '#f9f9f9'},
                }}
                name="ForgotPassword"
                component={ForgotPassword}
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen
                options={{headerShown: false}}
                name="BottomTabs"
                component={BottomTabs}
              />
              <Stack.Screen
                options={{
                  headerBackImage: () => (
                    <Icon name="chevron-left" size={30} color="black" />
                  ),
                  headerTitle: () => (
                    <Item rounded style={styles.itemInput}>
                      <Icon name="magnify" size={25} />
                      <Input placeholder="Search" />
                    </Item>
                  ),
                  headerStyle: {elevation: 0, backgroundColor: '#f9f9f9'},
                }}
                name="Search"
                component={Search}
              />
              <Stack.Screen
                options={{
                  headerBackImage: () => (
                    <Icon name="chevron-left" size={30} color="black" />
                  ),
                  headerTitle: false,
                  headerStyle: {elevation: 0, backgroundColor: '#f9f9f9'},
                }}
                name="RatingReview"
                component={RatingReview}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </Root>
    );
  }
}

const SearchButton = () => {
  return (
    <Button transparent>
      <Icon name="magnify" size={30} />
    </Button>
  );
};

const styles = StyleSheet.create({
  itemInput: {
    height: 40,
    width: '100%',
    marginRight: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 2,
    shadowRadius: 5,
    elevation: 2,
  },
});

const mapStateToProps = (state) => ({auth: state.auth});

export default connect(mapStateToProps)(App);
