import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import Profile from '../pages/Profile';
import MyOrders from '../pages/MyOrders';
import ShippingAddress from '../pages/ShippingAddress';
import AddingShippingAddress from '../pages/AddingShippingAddress';
import ChangeAddress from '../pages/ChangeAddress';
import SettingsScreen from '../pages/SettingsScreen';

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerTransparent: true}}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: false,
        }}
        name="MyOrders"
        component={MyOrders}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: false,
        }}
        name="ShippingAddress"
        component={ShippingAddress}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Adding Shipping Address',
        }}
        name="AddingShippingAddress"
        component={AddingShippingAddress}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Change Address',
        }}
        name="ChangeAddress"
        component={ChangeAddress}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: false,
        }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}
