import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home';
import DetailProduct from './DetailProduct';
import NotificationPage from './NotificationPage';

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
          headerTitle: 'Detail Product',
          headerTitleAlign: 'center',
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
        name="NotificationPage"
        component={NotificationPage}
      />
    </Stack.Navigator>
  );
}
