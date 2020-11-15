import React, {Component} from 'react';
// import {Button} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';

// Import stack screen
import ProfileStack from './ProfileStack';
import HomeStack from './HomeStack';
import MyBagStack from './MyBagStack';
import ShopStack from './ShopStack';

// Import Pages
import WelcomeScreen from '../pages/WelcomeScreen';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Favorite from '../pages/Favorite';
import {Root} from 'native-base';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

class App extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
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
                  headerTitle: false,
                  headerStyle: {elevation: 0, backgroundColor: '#f9f9f9'},
                }}
                name="Login"
                component={Login}
              />
              <Stack.Screen
                options={{
                  headerTitle: false,
                  headerStyle: {elevation: 0, backgroundColor: '#f9f9f9'},
                }}
                name="Signup"
                component={Signup}
              />
            </Stack.Navigator>
          ) : (
            <BottomTabs.Navigator>
              <BottomTabs.Screen
                options={{
                  tabBarIcon: ({size, color, focused}) => (
                    <Icon name="home-outline" size={size} color={color} />
                  ),
                }}
                name="Home"
                component={HomeStack}
              />
              <BottomTabs.Screen
                options={{
                  tabBarIcon: ({size, color, focused}) => (
                    <Icon name="cart-outline" size={size} color={color} />
                  ),
                }}
                name="Shop"
                component={ShopStack}
              />
              <BottomTabs.Screen
                options={{
                  tabBarIcon: ({size, color, focused}) => (
                    <Icon name="shopping-outline" size={size} color={color} />
                  ),
                }}
                name="Bag"
                component={MyBagStack}
              />
              <BottomTabs.Screen
                options={{
                  tabBarIcon: ({size, color, focused}) => (
                    <Icon name="heart-outline" size={size} color={color} />
                  ),
                }}
                name="Favorites"
                component={Favorite}
              />
              <BottomTabs.Screen
                options={{
                  tabBarIcon: ({size, color, focused}) => (
                    <Icon name="account" size={size} color={color} />
                  ),
                }}
                name="Profile"
                component={ProfileStack}
              />
            </BottomTabs.Navigator>
          )}
        </NavigationContainer>
      </Root>
    );
  }
}

// const SearchButton = () => {
//   return (
//     <Button transparent>
//       <Icon name="magnify" size={30} />
//     </Button>
//   );
// };

const mapStateToProps = (state) => ({auth: state.auth});

export default connect(mapStateToProps)(App);
