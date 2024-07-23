import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/auth/login';
import RegisterSuccess from '../../screens/auth/register_success';
import CreateAccount from '../../screens/auth/create_account';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='CreateAccountScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterSuccessFullScreen' component={RegisterSuccess} />
      <Stack.Screen name='CreateAccountScreen' component={CreateAccount} />
    </Stack.Navigator>
  );
};

export default AuthStack;
