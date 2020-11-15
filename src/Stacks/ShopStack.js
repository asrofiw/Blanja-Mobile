import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Shop from '../pages/Shop';
import Catalog from '../pages/Catalog';

const Stack = createStackNavigator();

export default function ShopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerTitle: 'Categories', headerTitleAlign: 'center'}}
        name="Shop"
        component={Shop}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Catalog',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ffffff',
            elevation: 0,
          },
        }}
        name="Catalog"
        component={Catalog}
      />
    </Stack.Navigator>
  );
}
