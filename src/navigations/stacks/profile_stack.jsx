import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfile from '@/screens/app/profile/EditProfile';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName='EditProfileScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='EditProfileScreen' component={EditProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
