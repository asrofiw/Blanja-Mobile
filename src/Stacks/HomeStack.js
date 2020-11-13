import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import DetailProduct from '../pages/DetailProduct';

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
          headerTitle: false,
          headerStyle: {
            backgroundColor: '#f9f9f9',
          },
        }}
        name="DetailProduct"
        component={DetailProduct}
      />
    </Stack.Navigator>
  );
}
