import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../pages/Home';
import DetailProduct from '../pages/DetailProduct';
import NotificationsPage from '../pages/NotificationsPage';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerBackImage: () => (
            <Icon name="chevron-left" size={30} color="black" />
          ),
          headerTitle: false,
          headerStyle: {
            backgroundColor: '#f9f9f9',
          },
        }}
        name="DetailProduct"
        component={DetailProduct}
      />
      <Stack.Screen
        options={{
          headerBackImage: () => (
            <Icon name="chevron-left" size={30} color="black" />
          ),
          headerTitle: 'Notifications',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f9f9f9',
            elevation: 0,
          },
        }}
        name="NotificationsPage"
        component={NotificationsPage}
      />
    </Stack.Navigator>
  );
}
