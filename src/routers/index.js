import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register, PokemoeDetail, Pokemoes, PokemoeBag} from '../pages';
import {Transition} from '../components';
const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="PokemoeBag" component={PokemoeBag} />
      <Stack.Screen name="Pokemoes" component={Pokemoes} />
      <Stack.Screen
        name="PokemoeDetail"
        component={PokemoeDetail}
        options={{...Transition}}
      />
    </Stack.Navigator>
  );
};

export default Root;
