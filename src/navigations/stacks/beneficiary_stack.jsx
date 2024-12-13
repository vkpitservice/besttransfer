import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SelectBeneficiary from '@/screens/app/ beneficiary/SelectBeneficiary';
import SearchBeneficiary from '@/screens/app/ beneficiary/SeacrchBeneficiary';
import Preview from '@/screens/app/preview';
import AddBeneficiary from '@/screens/app/beneficiary/AddBeneficiary';
import BeneficiaryOtpVerification from '@/screens/global/OtpVerification/benificiary';
import AddUPIBeneficiary from '@/screens/app/beneficiary/AddBeneficiary/upi';
import PaymentTypes from '@/screens/app/preview/paymenttypes';
import BankDetails from '@/screens/app/preview/bankdetails';
import SuccessTransaction from '@/screens/app/preview/successtransaction';
import VoltHtmlWebsiteView from '@/screens/app/preview/volthtmlwebsiteview';

const Stack = createStackNavigator();

const BeneficiaryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='SearchBeneficiaryScreen'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='SearchBeneficiaryScreen' component={SearchBeneficiary} />
      <Stack.Screen name='SelectBeneficiaryScreen' component={SelectBeneficiary} />
      <Stack.Screen name='PreviewScreen' component={Preview} />
      <Stack.Screen name='AddBeneficiary' component={AddBeneficiary} />
      <Stack.Screen name='AddUPIBeneficiary' component={AddUPIBeneficiary} />
      <Stack.Screen name='BeneficiaryOtpVerification' component={BeneficiaryOtpVerification} />
      <Stack.Screen name='PaymentTypes' component={PaymentTypes} />
      <Stack.Screen name='SuccessTransaction' component={SuccessTransaction} />
      <Stack.Screen name='VoltHtmlWebsiteView' component={VoltHtmlWebsiteView} />
      <Stack.Screen name='BankDetails' component={BankDetails} />
    </Stack.Navigator>
  );
};

export default BeneficiaryStack;
