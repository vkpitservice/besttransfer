import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionList from '@/screens/app/transaction/TransactionList';
import TransactionDetails from '@/screens/app/transaction/TransactionDetails';
import TransferEnterAmount from '@/screens/app/transaction/TransferEnterAmount';
import SelectBeneficiary from '@/screens/app/ beneficiary/SelectBeneficiary';
import AddBeneficiary from '@/screens/app/ beneficiary/AddBeneficiary';

const Stack = createStackNavigator();

const TransactionStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='TransactionListScreen'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='TransactionListScreen' component={TransactionList} />
      <Stack.Screen name='TransactionDetailsScreen' component={TransactionDetails} />
      <Stack.Screen name='TransferEnterAmountScreen' component={TransferEnterAmount} />
      <Stack.Screen name='SelectBeneficiaryScreen' component={SelectBeneficiary} />
      <Stack.Screen name='AddBeneficiaryScreen' component={AddBeneficiary} />
    </Stack.Navigator>
  );
};

export default TransactionStack;
