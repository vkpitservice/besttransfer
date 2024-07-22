import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList } from "../navigation_types/auth_stack";
import LoginScreen from "@/screens/auth/login";
import RegisterSuccessFull from "@/screens/auth/registerSuccessFull";
import CreateAnAccount from "@/screens/auth/createAnAccount";

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CreateAnAccountScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterSuccessFullScreen" component = {RegisterSuccessFull} />
      <Stack.Screen name="CreateAnAccountScreen" component = {CreateAnAccount} />
    </Stack.Navigator>
  );
};

export default AuthStack;
