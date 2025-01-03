import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfile from '@/screens/app/profile/EditProfile';
import HomeScreen from '@/screens/app/home';
import SumSub from '@/screens/app/home/SumSub';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='EditProfileScreen' component={EditProfile} />
      <Stack.Screen name='SumSub' component={SumSub} />
    </Stack.Navigator>
  );
};

export default HomeStack;
