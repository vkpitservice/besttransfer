import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfile from '@/screens/app/profile/EditProfile';
import HomeScreen from '@/screens/app/home';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='EditProfileScreen' component={EditProfile} />
    </Stack.Navigator>
  );
};

export default HomeStack;
