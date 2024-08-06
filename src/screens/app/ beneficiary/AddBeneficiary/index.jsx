import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import BackTitleHomeComponent from '@/components/BackTitleHome';
import { Constants } from './constants';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ColorSheet } from '@/utils/ColorSheet';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styles } from './styles';
import PrimaryDropDown from '@/components/dropdowns/primary_dropdown';
import TextInputField from '@/components/input/TextInput';
import PrimaryButton from '@/components/buttons/primaryButton';
import { ErrorFlash } from '@/utils/flashMessage';

const AddBeneficiary = () => {
  const [from, setFrom] = useState({
    firstName: '',
    lastName: '',
    accountName: '',
    ifsc: '',
    accountNumber: '',
    city: '',
    firstNameError: '',
    lastNameError: '',
    accountNameError: '',
    ifscError: '',
    accountNumberError: '',
    cityError: '',
  });

  const [selectCountry, setSelectCountry] = useState({
    label: '',
    value: '',
  });

  const handleContinue = () => {
    if (selectCountry?.value == '') {
      ErrorFlash(Constants.COUNTRY_REQUIRED);
    } else if (!from.firstName) {
      ErrorFlash(Constants.FIRST_NAME_REQUIRED);
    } else if (!from.lastName) {
      ErrorFlash(Constants.LAST_NAME_REQUIRED);
    } else if (!from.accountName) {
      ErrorFlash(Constants.ACC_NAME_REQUIRED);
    } else if (!from.ifsc) {
      ErrorFlash(Constants.IFSC_REQUIRED);
    } else if (!from.city) {
      ErrorFlash(Constants.CITY_REQUIRED);
    } else {
      //
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      {/* StatusBar */}
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent={true} />

      {/* Back And Header And Home */}
      <BackTitleHomeComponent
        title={Constants.HEADER_TITLE}
        onPressBack={() => {
          console.log('onPressBack');
        }}
        onPressHome={() => {
          console.log('onPressHome');
        }}
      />

      {/* Image */}
      <Image
        style={styles.imageBackground}
        source={require('@/assets/images/beneficiary/AddBeneficiary.png')}
      />

      {/* Main View Container */}
      <View style={styles.mainViewContainer}>
        {/* ScrollView */}
        <ScrollView
          contentContainerStyle={styles.scroll_container}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* Main Container */}
          <View style={styles.main_Container}>
            {/* Reciepient Details */}
            <Text style={styles.title}> {Constants.TITLE} </Text>

            {/* DropDown */}
            <PrimaryDropDown
              title={Constants.DROPDOWN_TITLE}
              data={CountryData}
              value={selectCountry.value}
              onChange={setSelectCountry}
            />

            {/* Input Field */}
            {/* First Name */}
            <TextInputField
              containerStyle={styles.inputContainer}
              placeholder={Constants.FIRST_NAME}
              value={from.firstName}
              onChangeText={(text) => {
                setFrom({
                  ...from,
                  firstName: text,
                });
              }}
              onFocus={() => setFrom({ ...from, firstNameError: '' })}
              keyboardType={'default'}
              textError={from.firstNameError}
              onBlur={() => {
                if (from.firstName === '') {
                  setFrom({ ...from, firstNameError: Constants.FIRST_NAME_REQUIRED });
                } else {
                  setFrom({ ...from, firstNameError: '' });
                }
              }}
            />

            {/* Last Name */}
            <TextInputField
              containerStyle={styles.inputContainer}
              placeholder={Constants.LAST_NAME}
              value={from.lastName}
              onChangeText={(text) => {
                setFrom({
                  ...from,
                  lastName: text,
                });
              }}
              onFocus={() => setFrom({ ...from, lastNameError: '' })}
              keyboardType={'default'}
              textError={from.lastNameError}
              onBlur={() => {
                if (from.lastName === '') {
                  setFrom({ ...from, lastNameError: Constants.LAST_REQUIRED });
                } else {
                  setFrom({ ...from, lastNameError: '' });
                }
              }}
            />

            {/* Account Name */}
            <TextInputField
              containerStyle={styles.inputContainer}
              placeholder={Constants.ACC_NAME}
              value={from.accountName}
              onChangeText={(text) => {
                setFrom({
                  ...from,
                  accountName: text,
                });
              }}
              onFocus={() => setFrom({ ...from, accountNameError: '' })}
              keyboardType={'default'}
              textError={from.accountNameError}
              onBlur={() => {
                if (from.accountName === '') {
                  setFrom({ ...from, accountNameError: Constants.ACC_NAME_REQUIRED });
                } else {
                  setFrom({ ...from, accountNameError: '' });
                }
              }}
            />

            {/* IFSC */}
            <TextInputField
              containerStyle={styles.inputContainer}
              placeholder={Constants.IFSC}
              value={from.ifsc}
              onChangeText={(text) => {
                setFrom({
                  ...from,
                  ifsc: text,
                });
              }}
              onFocus={() => setFrom({ ...from, ifscError: '' })}
              keyboardType={'default'}
              textError={from.ifscError}
              onBlur={() => {
                if (from.ifsc === '') {
                  setFrom({ ...from, ifscError: Constants.IFSC_REQUIRED });
                } else {
                  setFrom({ ...from, ifscError: '' });
                }
              }}
            />

            {/* Account Number */}
            <TextInputField
              containerStyle={styles.inputContainer}
              placeholder={Constants.ACCOUNT_NUMBER}
              value={from.accountNumber}
              onChangeText={(text) => {
                setFrom({
                  ...from,
                  accountNumber: text,
                });
              }}
              onFocus={() => setFrom({ ...from, accountNumberError: '' })}
              keyboardType={'numeric'}
              textError={from.accountNumberError}
              onBlur={() => {
                if (from.accountNumber === '') {
                  setFrom({ ...from, accountNumberError: Constants.ACCOUNT_NUMBER_REQUIRED });
                } else {
                  setFrom({ ...from, accountNumberError: '' });
                }
              }}
            />

            {/* City */}
            <TextInputField
              containerStyle={styles.inputContainer}
              placeholder={Constants.CITY}
              value={from.city}
              onChangeText={(text) => {
                setFrom({
                  ...from,
                  city: text,
                });
              }}
              onFocus={() => setFrom({ ...from, cityError: '' })}
              keyboardType={'default'}
              textError={from.cityError}
              onBlur={() => {
                if (from.city === '') {
                  setFrom({ ...from, cityError: Constants.CITY_REQUIRED });
                } else {
                  setFrom({ ...from, cityError: '' });
                }
              }}
            />

            {/* Continue Button */}
            <PrimaryButton
              style={styles.btnContainer}
              title={Constants.BTN_NAME}
              onPress={handleContinue}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddBeneficiary;

const listCountry = [
  {
    name: 'India',
    code: 'IN',
  },
  {
    name: 'USA',
    code: 'US',
  },
  {
    name: 'UK',
    code: 'UK',
  },
  {
    name: 'Germany',
    code: 'DE',
  },
  {
    name: 'France',
    code: 'FR',
  },
  {
    name: 'Japan',
    code: 'JP',
  },
];

const CountryData = listCountry.map((item, index) => {
  return {
    label: item.name,
    value: item.code,
  };
});
