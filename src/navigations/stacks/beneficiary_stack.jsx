import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddBeneficiary from '@/screens/app/ beneficiary/AddBeneficiary';
import SelectBeneficiary from '@/screens/app/ beneficiary/SelectBeneficiary';
import SearchBeneficiary from '@/screens/app/ beneficiary/SeacrchBeneficiary';
import Preview from '@/screens/app/preview';

const Stack = createStackNavigator();

const BeneficiaryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='SearchBeneficiaryScreen'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='SearchBeneficiaryScreen' component={SearchBeneficiary} />
      <Stack.Screen name='SelectBeneficiaryScreen' component={SelectBeneficiary} />
      {/* <Stack.Screen name = 'AddBeneficiaryScreen' component = {AddBeneficiary} /> */}
      <Stack.Screen name='PreviewScreen' component={Preview} />
    </Stack.Navigator>
  );
};

export default BeneficiaryStack;
