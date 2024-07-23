import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/auth/login';
import RegisterSuccessFull from '../../screens/auth/registerSuccessFull';
import CreateAnnAccount from '../../screens/auth/createAnAccount';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='CreateAnnAccountScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterSuccessFullScreen' component={RegisterSuccessFull} />
      <Stack.Screen name='CreateAnnAccountScreen' component={CreateAnnAccount} />
    </Stack.Navigator>
  );
};

export default AuthStack;
