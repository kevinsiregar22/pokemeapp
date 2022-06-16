import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register, PokemoeList, PokemoeDetail} from '../pages';
import Animation from '../components/animation';
import {Transition} from '../components';
const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="PokemoeList" component={PokemoeList} />
      <Stack.Screen
        name="PokemoeDetail"
        component={PokemoeDetail}
        options={{...Transition}}
      />
      <Stack.Screen name="Animation" component={Animation} />
    </Stack.Navigator>
  );
};

export default Root;
