import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Success from '@/screens/global/success';
import ResidentCountry from '@/screens/auth/resident/countryResident';
import ResidentIdentityDocument from '@/screens/auth/resident/identityDocumentResident';
import OtpVerification from '@/screens/global/OtpVerification';
import Login from '@/screens/auth/login';
import CreateAccount from '@/screens/auth/create_account';
import UploadDocumentResident from '@/screens/auth/resident/upload DocumetResident';
import AppBottomTab from '../tabs/bottom_tab';
import EmailOtpVerification from '@/screens/global/OtpVerification/email';
import BusinessDetails from '@/screens/business';
import AboutBusiness from '@/screens/business/about';
import BusinessAddress from '@/screens/business/address';
import SelectOfficer from '@/screens/business/selectOfficer';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginScreen' component={Login} />
      <Stack.Screen name='CreateAccountScreen' component={CreateAccount} />
      <Stack.Screen name='ResidentCountryScreen' component={ResidentCountry} />
      <Stack.Screen name='ResidentIdentityDocumentScreen' component={ResidentIdentityDocument} />
      <Stack.Screen name='OtpVerificationScreen' component={OtpVerification} />
      <Stack.Screen name='EmailOtpVerificationScreen' component={EmailOtpVerification} />
      <Stack.Screen name='UploadDocumentResidentScreen' component={UploadDocumentResident} />
      <Stack.Screen name='RegisterSuccessFullScreen' component={Success} />
      <Stack.Screen name='BusinessDetails' component={BusinessDetails} />
      <Stack.Screen name='AboutBusiness' component={AboutBusiness} />
      <Stack.Screen name='BusinessAddress' component={BusinessAddress} />
      <Stack.Screen name='SelectOfficer' component={SelectOfficer} />
      <Stack.Screen name='AppBottomTab' component={AppBottomTab} />
    </Stack.Navigator>
  );
};

export default AuthStack;
