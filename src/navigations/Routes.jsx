import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './stacks/auth_stack';
import TransactionStack from './stacks/transaction_stack';

const Routes = () => {
  return (
    <NavigationContainer>
      <TransactionStack />
    </NavigationContainer>
  );
};

export default Routes;
