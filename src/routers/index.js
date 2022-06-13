import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register, PokemoeList, PokemoeDetail} from '../pages';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="PokemoeList" component={PokemoeList} />
      <Stack.Screen name="PokemoeDetail" component={PokemoeDetail} />
    </Stack.Navigator>
  );
};

export default Root;
