import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionList from '@/screens/app/transaction/TransactionList';
import TransactionDetails from '@/screens/app/transaction/TransactionDetails';
import TransferWelcomeDashboard from '@/screens/app/transaction/TransferWelcomeDashboard';
import TransferEnterAmount from '@/screens/app/transaction/TransferEnterAmount';
import Beneficiary from '@/screens/app/ beneficiary/SeacrchBeneficiary';

const Stack = createStackNavigator();

const TransactionStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='TransactionListScreen'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='TransferWelcomeDashboardScreen' component={TransferWelcomeDashboard} />
      <Stack.Screen name='TransactionListScreen' component={TransactionList} />
      <Stack.Screen name='TransactionDetailsScreen' component={TransactionDetails} />
      <Stack.Screen name='TransferEnterAmountScreen' component={TransferEnterAmount} />
      {/* <Stack.Screen name='BeneficiaryScreen' component={Beneficiary} /> */}
    </Stack.Navigator>
  );
};

export default TransactionStack;

const styles = StyleSheet.create({});
