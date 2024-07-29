import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionList from '@/screens/app/transactionScreen/TransactionList';
import TransactionDetails from '@/screens/app/transactionScreen/TransactionDetails';
import TransferWelcomeDashboard from '@/screens/app/transactionScreen/TransferWelcomeDashboard';

const Stack = createStackNavigator();

const TransactionStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='TransferWelcomeDashboardScreen'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='TransferWelcomeDashboardScreen' component={TransferWelcomeDashboard} />
      <Stack.Screen name='TransactionListScreen' component={TransactionList} />
      <Stack.Screen name='TransactionDetailsScreen' component={TransactionDetails} />
    </Stack.Navigator>
  );
};

export default TransactionStack;

const styles = StyleSheet.create({});
