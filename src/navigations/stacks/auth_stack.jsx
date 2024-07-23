import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/auth/login';
import RegisterSuccessFull from '../../screens/auth/registerSuccessFull';
import Personal from '../../screens/auth/createAnAccount/Personal';
import Business from '../../screens/auth/createAnAccount/Business';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='PersonalScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterSuccessFullScreen' component={RegisterSuccessFull} />
      <Stack.Screen name='PersonalScreen' component={Personal} />
      <Stack.Screen name='BusinessScreen' component={Business} />
    </Stack.Navigator>
  );
};

export default AuthStack;
