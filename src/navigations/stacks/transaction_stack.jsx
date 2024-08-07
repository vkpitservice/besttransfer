import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionList from '@/screens/app/transaction/TransactionList';
import TransactionDetails from '@/screens/app/transaction/TransactionDetails';
import TransferEnterAmount from '@/screens/app/transaction/TransferEnterAmount';
import Preview from '@/screens/app/preview';

const Stack = createStackNavigator();

const TransactionStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='SelectBeneficiaryScreen'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='TransactionListScreen' component={TransactionList} />
      <Stack.Screen name='TransactionDetailsScreen' component={TransactionDetails} />
      <Stack.Screen name='TransferEnterAmountScreen' component={TransferEnterAmount} />
      <Stack.Screen name='PreviewScreen' component={Preview} />
    </Stack.Navigator>
  );
};

export default TransactionStack;
