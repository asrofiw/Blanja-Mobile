import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Bottom = createBottomTabNavigator();

// Import stack screen
import ProfileStack from './ProfileStack';
import HomeStack from './HomeStack';
import MyBagStack from './MyBagStack';
import ShopStack from './ShopStack';
import Favorite from '../pages/Favorite';

const BottomTabs = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="home-outline" size={size} color={color} />
          ),
        }}
        name="Home"
        component={HomeStack}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="cart-outline" size={size} color={color} />
          ),
        }}
        name="Shop"
        component={ShopStack}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="shopping-outline" size={size} color={color} />
          ),
        }}
        name="Bag"
        component={MyBagStack}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="heart-outline" size={size} color={color} />
          ),
        }}
        name="Favorites"
        component={Favorite}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="account" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileStack}
      />
    </Bottom.Navigator>
  );
};

export default BottomTabs;
