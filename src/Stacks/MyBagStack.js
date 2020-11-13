import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Bag from '../pages/Bag';
import Checkout from '../pages/Checkout';
import SuccessScreen from '../pages/SuccessScreen';

const Stack = createStackNavigator();

export default function MyBagStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="MyBag"
        component={Bag}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Checkout',
          headerStyle: {
            backgroundColor: '#f9f9f9',
          },
        }}
        name="Checkout"
        component={Checkout}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SuccessScreen"
        component={SuccessScreen}
      />
    </Stack.Navigator>
  );
}
