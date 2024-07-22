import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList } from "../navigation_types/auth_stack";
import LoginScreen from "@/screens/auth/login";

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
