import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QRScan from '@/screens/app/transaction/QR';

const Stack = createStackNavigator();

const QrStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='QRScan' component={QRScan} />
    </Stack.Navigator>
  );
};

export default QrStack;
