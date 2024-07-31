import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './stacks/auth_stack';
import TransactionStack from './stacks/transaction_stack';
import AppBottomTab from './tabs/bottom_tab';

const Routes = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Routes;
