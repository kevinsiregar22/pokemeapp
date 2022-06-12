import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PokemoeList from '../pages/pokemoe/pokemoeList';
import {Login, Register} from '../pages/auth';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="PokemoeList" component={PokemoeList} />
    </Stack.Navigator>
  );
};

export default Root;
