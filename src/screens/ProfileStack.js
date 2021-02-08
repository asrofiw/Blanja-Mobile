import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createStackNavigator();

import Profile from './Profile';
import MyOrders from './MyOrders';
import ShippingAddress from './ShippingAddress';
import AddingShippingAddress from './AddingShippingAddress';
import ChangeAddress from './ChangeAddress';
import SettingsScreen from './SettingsScreen';
import OrderDetail from './OrderDetail';

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
          headerBackImage: () => (
            <Icon name="chevron-left" size={30} color="black" />
          ),
          headerTransparent: true,
          headerTitle: false,
        }}
        name="MyOrders"
        component={MyOrders}
      />
      <Stack.Screen
        options={{
          headerBackImage: () => (
            <Icon name="chevron-left" size={30} color="black" />
          ),
          headerTitle: 'Order Details',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#f9f9f9'},
        }}
        name="OrderDetail"
        component={OrderDetail}
      />
      <Stack.Screen
        options={{
          headerBackImage: () => (
            <Icon name="chevron-left" size={30} color="black" />
          ),
          headerTransparent: true,
          headerTitle: false,
        }}
        name="ShippingAddress"
        component={ShippingAddress}
      />
      <Stack.Screen
        options={{
          headerBackImage: () => (
            <Icon name="chevron-left" size={30} color="black" />
          ),
          headerTitle: 'Adding Shipping Address',
        }}
        name="AddingShippingAddress"
        component={AddingShippingAddress}
      />
      <Stack.Screen
        options={{
          headerBackImage: () => (
            <Icon name="chevron-left" size={30} color="black" />
          ),
          headerTitle: 'Change Address',
        }}
        name="ChangeAddress"
        component={ChangeAddress}
      />
      <Stack.Screen
        options={{
          headerBackImage: () => (
            <Icon name="chevron-left" size={30} color="black" />
          ),
          headerTitle: false,
          headerStyle: {backgroundColor: '#f9f9f9', elevation: 0},
        }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}
