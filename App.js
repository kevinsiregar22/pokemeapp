import React from 'react';
import Root from './src/routers';
import {NavigationContainer} from '@react-navigation/native';
import CodePush from 'react-native-code-push';
const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};
const App = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default CodePush(codePushOptions)(App);
