import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/auth/login';

import CreateAccount from '../../screens/auth/create_account';
import Success from '@/screens/global/success';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterSuccessFullScreen' component={Success} />
      <Stack.Screen name='CreateAccountScreen' component={CreateAccount} />
    </Stack.Navigator>
  );
};

export default AuthStack;
