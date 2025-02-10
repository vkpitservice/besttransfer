import { Image, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
import { StackActions } from '@react-navigation/native';
import postRequest from '@/components/NetworkRequest/postRequest';
import { DefaultConstants } from '@/utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddUPIBeneficiary = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [vpaVerified, setvpaVerified] = useState(false);
  const [from, setFrom] = useState({
    firstName: '',
    lastName: '',
    accountName: '',
    ifsc: '',
    accountNumber: '',
    city: '',
    address: '',
    firstNameError: '',
    lastNameError: '',
    accountNameError: '',
    ifscError: '',
    accountNumberError: '',
    cityError: '',
    addressError: '',
  })
  const [firstname, setFirstName] = useState("");

  const [selectReason, setSelectReason] = useState({
    label: '',
    value: '',
  });

  const handleContinue = async () => {
    if (!firstname) {
      ErrorFlash(Constants.FIRST_NAME_REQUIRED)
    } else if (!from.lastName) {
      ErrorFlash(Constants.LAST_NAME_REQUIRED)
    } else if (!from.accountNumber) {
      ErrorFlash(Constants.ACCOUNT_NUMBER_REQUIRED)
    } else {
      setLoading(true)
      let token = await AsyncStorage.getItem('login_token');
      var otpresp = await postRequest(DefaultConstants.BASE_URL + 'otp/validate-benificiary', { source: DefaultConstants.SOURCE_NAME }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });
      console.log(otpresp);
      setLoading(false)

      navigation.navigate('BeneficiaryOtpVerification', { firstname: firstname, lastname: from.lastName, accountname: firstname + " " + from.lastName, ifsc: '', city: '', accountnumber: from.accountNumber, beneType: 'upi', mobile: from.city, address: from.address, type: selectReason.value });
    }
  }

  const validateVpa = async() =>{
    setLoading(true)
    let token = await AsyncStorage.getItem('login_token');
    var validatevpa = await postRequest(DefaultConstants.BASE_URL + 'benificiary/validate-vpa', {
      upi_id: from.accountNumber
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })

    if(validatevpa[0]==400)
    {
      setvpaVerified(false)
      ErrorFlash('Invalid VPA address')
      setLoading(false)
    }
    else
    {
      let name = (validatevpa[1].data.account_name).split(" ");
      let firstname = name[0];
      name.shift()
      let lastname = name.join(" ");
      console.log(firstname);
      setFirstName(firstname)
      setFrom({
        ...from,
        firstName: firstname
      })
      setFrom({
        ...from,
        lastName: lastname
      })
      setLoading(false)
      setvpaVerified(true)
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      {/* StatusBar */}
      <StatusBar
        barStyle='light-content'
        backgroundColor={'transparent'}
        translucent={true}
      />

      {/* Back And Header And Home */}
      <BackTitleHomeComponent
        title={Constants.HEADER_TITLE}
        onPressBack={() => {
          navigation.goBack();
        }}
        onPressHome={() => {
          navigation.dispatch(StackActions.replace('AppBottomTab'));
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
            {/* <PrimaryDropDown
              title={Constants.DROPDOWN_TITLE}
              data={CountryData}
              value={selectCountry.value}
              onChange={setSelectCountry}
              placeholder={Constants.DROPDOWN_TITLE}
            /> */}

            {/* Input Field */}

            {/* Account Number */}
            <TextInputField
              containerStyle={styles.inputContainer}
              placeholder={Constants.UPI_ID}
              value={from.accountNumber}
              onChangeText={(text) => {
                setFrom({
                  ...from,
                  accountNumber: text
                })
              }}
              editable={firstname ? false : true}
              onFocus={() => setFrom({ ...from, accountNumberError: '' })}
              keyboardType={'default'}
              textError={from.accountNumberError}
              onBlur={() => {
                if (from.accountNumber === '') {
                  setFrom({ ...from, accountNumberError: Constants.ACCOUNT_NUMBER_REQUIRED })
                } else {
                  setFrom({ ...from, accountNumberError: '' })
                }
              }}
            />


            {/* First Name */}
            {firstname &&
              <TextInputField
                containerStyle={styles.inputContainer}
                placeholder={Constants.FIRST_NAME}
                value={firstname}
                editable={false}
              />
            }

            {/* Last Name */}
            {from.lastName &&
              <TextInputField
                containerStyle={styles.inputContainer}
                placeholder={Constants.LAST_NAME}
                value={from.lastName}
                editable={false}
              />
            }



            {/* MobileNumber */}
            {firstname &&
              <>
                <TextInputField
                  containerStyle={styles.inputContainer}
                  placeholder={Constants.MOBILE_NUMBER}
                  value={from.city}
                  onChangeText={(text) => {
                    setFrom({
                      ...from,
                      city: text
                    })
                  }}
                  onFocus={() => setFrom({ ...from, cityError: '' })}
                  keyboardType={'default'}
                  textError={from.cityError}
                  // onBlur={() => {
                  //   if (from.city === '') {
                  //     setFrom({ ...from, cityError: Constants.CITY_REQUIRED })
                  //   } else {
                  //     setFrom({ ...from, cityError: '' })
                  //   }
                  // }}
                  maxLength={10}
                />

                {/* Address */}
                <TextInputField
                  containerStyle={styles.inputContainer}
                  placeholder={Constants.ADDRESS}
                  value={from.address}
                  onChangeText={(text) => {
                    setFrom({
                      ...from,
                      address: text
                    })
                  }}
                  onFocus={() => setFrom({ ...from, addressError: '' })}
                  keyboardType={'default'}
                  textError={from.addressError}
                  onBlur={() => {
                    if (from.address === '') {
                      setFrom({ ...from, addressError: Constants.ADDRESS })
                    } else {
                      setFrom({ ...from, addressError: '' })
                    }
                  }}
                />

                {/* DropDown */}
                <PrimaryDropDown
                  style={styles.inputContainer}
                  data={listReason}
                  placeholder={Constants.SELECT_TYPE_OF_BENEFICIARY}
                  value={selectReason.value}
                  onChange={setSelectReason}
                />
              </>
            }
            {/* Continue Button */}
            {vpaVerified ?
              <PrimaryButton
                style={styles.btnContainer}
                title={Constants.BTN_NAME}
                onPress={handleContinue}
                loading={loading}
              />
              :
              <PrimaryButton
                style={styles.btnContainer}
                title={Constants.VALIDATE_BTN_NAME}
                onPress={validateVpa}
                loading={loading}
              />
            }
          </View>

        </ScrollView>
      </View>

    </KeyboardAvoidingView>
  )
}

export default AddUPIBeneficiary;
const listReason = [
  {
    label: 'Individual',
    value: 'Individual',
  },
  {
    label: 'Business',
    value: 'Business',
  },
];
const listCountry = [
  {
    name: 'India',
    code: 'IN'
  },
  {
    name: 'USA',
    code: 'US'
  },
  {
    name: 'UK',
    code: 'UK'
  },
  {
    name: 'Germany',
    code: 'DE'
  },
  {
    name: 'France',
    code: 'FR'
  },
  {
    name: 'Japan',
    code: 'JP'
  }
]

const CountryData = listCountry.map((item, index) => {
  return {
    label: item.name,
    value: item.code
  }
})