import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionList from '@/screens/app/transactionScreen/TransactionList';
import TransactionDetails from '@/screens/app/transactionScreen/TransactionDetails';
import TransferWelcomeDashboard from '@/screens/app/transactionScreen/TransferWelcomeDashboard';
import TransferEnterAmount from '@/screens/app/transactionScreen/TransferEnterAmount';
import Beneficiary from '@/screens/app/ Beneficiary';

const Stack = createStackNavigator();

const TransactionStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='BeneficiaryScreen'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='TransferWelcomeDashboardScreen' component={TransferWelcomeDashboard} />
      <Stack.Screen name='TransactionListScreen' component={TransactionList} />
      <Stack.Screen name='TransactionDetailsScreen' component={TransactionDetails} />
      <Stack.Screen name='TransferEnterAmountScreen' component={TransferEnterAmount} />
      <Stack.Screen name='BeneficiaryScreen' component={Beneficiary} />
    </Stack.Navigator>
  );
};

export default TransactionStack;

const styles = StyleSheet.create({});
