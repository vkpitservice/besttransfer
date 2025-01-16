import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QRScan from '@/screens/app/transaction/QR';
import QRAmount from '@/screens/app/transaction/QR/QRAmount';

const Stack = createStackNavigator();

const QrStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='QRScan' component={QRScan} />
      <Stack.Screen name='QRAmount' component={QRAmount} />
    </Stack.Navigator>
  );
};

export default QrStack;
