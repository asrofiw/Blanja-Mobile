import React, {Component} from 'react';
// import {Button} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import stack screen
import ProfileStack from './ProfileStack';
import HomeStack from './HomeStack';
import MyBagStack from './MyBagStack';

// Import Pages
import WelcomeScreen from '../pages/WelcomeScreen';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Shop from '../pages/Shop';
import Favorite from '../pages/Favorite';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <NavigationContainer>
        {!this.props.auth.isLogin ? (
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="WelcomeScreen"
              component={WelcomeScreen}
            />
            <Stack.Screen
              options={{headerTitle: false, headerTransparent: true}}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{headerShown: false}}
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
              component={Shop}
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
