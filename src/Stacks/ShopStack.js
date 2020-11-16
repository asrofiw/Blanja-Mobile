import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
          headerBackImage: () => (
            <Icon name="chevron-left" size={30} color="black" />
          ),
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
