import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WalletHome from '@/screens/app/home/WalletHome';
import Wallet from '@/screens/app/preview/wallet';
import WalletBankDetails from '@/screens/app/preview/walletBankDetails';
import WalletSuccessTransaction from '@/screens/app/preview/WalletSuccessTransaction';

const Stack = createStackNavigator();

const WalletStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={WalletHome} />
      <Stack.Screen name='WalletSuccessTransaction' component={WalletSuccessTransaction} />
      <Stack.Screen name='WalletBankDetails' component={WalletBankDetails} />
    </Stack.Navigator>
  );
};

export default WalletStack;
