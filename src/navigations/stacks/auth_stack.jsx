import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Success from '@/screens/global/success';
import OtpVerification from '@/screens/global/OtpVerification';
import Login from '@/screens/auth/login';
import CreateAccount from '@/screens/auth/create_account';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginScreen' component={Login} />
      <Stack.Screen name='OtpVerification' component={OtpVerification} />
      <Stack.Screen name='RegisterSuccessFullScreen' component={Success} />
      <Stack.Screen name='CreateAccountScreen' component={CreateAccount} />
    </Stack.Navigator>
  );
};

export default AuthStack;
