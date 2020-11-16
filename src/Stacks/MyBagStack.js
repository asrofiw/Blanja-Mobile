import React from 'react';
import {Button} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Bag from '../pages/Bag';
import Checkout from '../pages/Checkout';
import SuccessScreen from '../pages/SuccessScreen';

const Stack = createStackNavigator();

export default function MyBagStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="MyBag"
        component={Bag}
      />
      <Stack.Screen
        options={{
          headerBackImage: () => (
            <Icon name="chevron-left" size={30} color="black" />
          ),
          headerRight: () => (
            <Button transparent onPress={() => navigation.navigate('Search')}>
              <Icon name="magnify" size={30} />
            </Button>
          ),
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

const SearchButton = () => {
  return (
    <Button transparent>
      <Icon name="magnify" size={30} />
    </Button>
  );
};
