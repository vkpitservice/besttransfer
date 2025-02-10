import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QRScan from '@/screens/app/transaction/QR';
import QRAmount from '@/screens/app/transaction/QR/QRAmount';
import QRTransactionStatus from '@/screens/app/transaction/QR/QRTransactionStatus';

const Stack = createStackNavigator();

const QrStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='QRScan' component={QRScan} />
      <Stack.Screen name='QRAmount' component={QRAmount} />
      <Stack.Screen name='QRTransactionStatus' component={QRTransactionStatus} />
    </Stack.Navigator>
  );
};

export default QrStack;
