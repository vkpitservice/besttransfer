import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./stacks/auth_stack";

const Routes = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Routes;
