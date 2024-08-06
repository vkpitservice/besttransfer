import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import BestTransFer from '@/assets/svg/CreateAcc/Best_TransFer.svg';
import { ColorSheet } from '@/utils/ColorSheet';
import PrimaryButton from '@/components/buttons/primaryButton';
import { styles } from './styles';
import { Constants } from './constants';
import TextInputField from '@/components/input/TextInput';
import { validateEmail } from '@/utils/validations';
import { ErrorFlash } from '@/utils/flashMessage';
import PhoneNumberInput from '@/components/input/PhoneNumberInput';
import NumberInput from '@/components/input/NumberInput';
import { DefaultConstants } from '@/utils/Constants';
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import postRequest from '@/components/NetworkRequest/postRequest';

const CreateAccount = ({ navigation }) => {
  const [displayVisibleWindow, setDisplayVisibleWindow] = useState('individual');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phoneNumber: '',
    email: '',
    firstnameError: '',
    lastnameError: '',
    emailError: '',
    digitCode: '',
    digitCodeError: '',
    confirmDigitCode: '',
    confirmDigitCodeError: '',
  });


  const [code, setCode] = useState(defaultValue);

  const onPressPersonal = () => {
    setDisplayVisibleWindow('individual');
  };

  const onPressBusiness = () => {
    setDisplayVisibleWindow('business');
  };
  const onPressSignUp = async () => {
    if (formData.firstname == '') {
      ErrorFlash(Constants.ENTER_FIRST_NAME);
    } else if (formData.lastname == '') {
      ErrorFlash(Constants.ENTER_LAST_NAME);
    } else if (formData.email == '') {
      ErrorFlash(Constants.ENTER_EMAIL);
    } else if (!validateEmail(formData.email)) {
      ErrorFlash(Constants.VALID_EMAIL);
    } else if (formData.digitCode.length == '') {
      ErrorFlash(Constants.ENTER_DIGIT_CODE);
    } else if (formData.digitCode?.length !== 6) {
      ErrorFlash(Constants.PIN_REQUIRED);
    } else if (formData.confirmDigitCode.length == '') {
      ErrorFlash(Constants.ENTER_DIGIT_CODE);
    } else if (formData.digitCode != formData.confirmDigitCode) {
      ErrorFlash(Constants.DIGIT_CODE_NOT_MATCH);
    } else {
      setLoading(true)
      var resp = await postRequest(DefaultConstants.BASE_URL + 'user/signup', { first_name: formData.firstname, last_name: formData.lastname, email: formData.email, password: formData.digitCode, mobile: formData.phoneNumber, country_code: "+44", source: DefaultConstants.SOURCE_NAME, user_type: displayVisibleWindow }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (resp[0] != 400) {
        setAsyncValue('reg_access_token', resp[1].data.access_token);
        setAsyncValue('reg_first_name', resp[1].data.user.first_name);
        setAsyncValue('reg_last_name', resp[1].data.user.last_name);
        setAsyncValue('reg_mobile', resp[1].data.user.mobile);
        setAsyncValue('reg_email', resp[1].data.user.email);
        setAsyncValue('reg_pass', formData.digitCode);
        setAsyncValue('reg_id', JSON.stringify(resp[1].data.user.id));
        setAsyncValue('reg_user_type', displayVisibleWindow);
        setLoading(false)
        console.log(DefaultConstants.BASE_URL + 'otp/validate-mobile');
        console.log(JSON.stringify({ source: DefaultConstants.SOURCE_NAME }));
        console.log({
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + resp[1].data.access_token
          }
        });
        
        
        var otpresp = await postRequest(DefaultConstants.BASE_URL + 'otp/validate-mobile', { source: DefaultConstants.SOURCE_NAME }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + resp[1].data.access_token
          }
        });
        navigation.dispatch(StackActions.replace('OtpVerificationScreen'));
      }
      else {
        setLoading(false)
        ErrorFlash(resp[1].response.data.detail);
      }

    }
  };
  const setAsyncValue = async (key, value) => {
    await AsyncStorage.setItem(key, value);
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle='light-content' backgroundColor={ColorSheet.PrimaryButton} translucent />

      <ScrollView
        contentContainerStyle={styles.scroll_container}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require('@/assets/images/CreateAccountBG/Create_an_account.png')}
          style={styles.imgBackground}
        />

        {/* Logo */}
        <View style={styles.logo_container}>
          <BestTransFer width={130} height={130} />
        </View>

        {/* Main Container */}
        <View style={styles.main_container}>
          {/* Header Title */}
          <Text style={styles.titleText}> Create an Account </Text>

          {/* User Choose individual Or Business */}
          <View style={styles.row_bg_container}>
            <TouchableOpacity
              style={[
                styles.common_container,
                displayVisibleWindow == 'individual'
                  ? { backgroundColor: ColorSheet.buttonChose }
                  : { backgroundColor: 'transparent' },
              ]}
              onPress={onPressPersonal}
              activeOpacity={0.5}
            >
              <Text
                style={[
                  styles.common_txt_style,
                  displayVisibleWindow == 'individual'
                    ? { color: ColorSheet.Primary }
                    : { color: ColorSheet.buttonChose },
                ]}
              >
                {Constants.PERSONAL_TXT}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.common_container,
                displayVisibleWindow == 'business'
                  ? { backgroundColor: ColorSheet.buttonChose }
                  : { backgroundColor: 'transparent' },
              ]}
              onPress={onPressBusiness}
              activeOpacity={0.5}
            >
              <Text
                style={[
                  styles.common_txt_style,
                  displayVisibleWindow == 'business'
                    ? { color: ColorSheet.Primary }
                    : { color: ColorSheet.buttonChose },
                ]}
              >
                {Constants.BUSINESS_TXT}
              </Text>
            </TouchableOpacity>
          </View>


          {/* TextInput Filed */}
          {/* Enter your first name * */}
          <TextInputField
            secureTextEntry={false}
            style={styles.textInput_rootContainer}
            placeholder={Constants.FIRST_NAME}
            keyboardTyp={'default'}
            value={formData.firstname}
            onChangeText={(text) => setFormData({ ...formData, firstname: text })}
            textError={formData.firstnameError}
            onBlur={() => {
              if (formData.firstname === '') {
                setFormData({ ...formData, firstnameError: Constants.ENTER_FIRST_NAME });
              } else {
                setFormData({ ...formData, firstnameError: '' });
              }
            }}
          />

          {/* Enter your last name * */}
          <TextInputField
            secureTextEntry={false}
            style={styles.textInput_rootContainer}
            placeholder={Constants.LAST_NAME}
            keyboardTyp={'default'}
            value={formData.lastname}
            onChangeText={(text) => setFormData({ ...formData, lastname: text })}
            textError={formData.lastnameError}
            onBlur={() => {
              if (formData.lastname === '') {
                setFormData({ ...formData, lastnameError: Constants.ENTER_LAST_NAME });
              } else {
                setFormData({ ...formData, lastnameError: '' });
              }
            }}
          />


          {/* DropDown */}
          <NumberInput
            style={styles.dropDown_rootContainer}
            data={numberData}
            value={code}
            onChange={(value) => setCode(value)}
            valueNumber={formData.phoneNumber}
            onChangeNumber={(number) => setFormData({ ...formData, phoneNumber: number })}
            placeholder={Constants.PHONE_NUM}
            disable={true}
          />


          {/* Enter your email id * */}
          <TextInputField
            secureTextEntry={false}
            style={styles.textInput_rootContainer}
            placeholder={Constants.Email_Id}
            keyboardTyp={'email-address'}
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            textError={formData.emailError}
            onBlur={() => {
              if (formData.email === '') {
                setFormData({ ...formData, emailError: Constants.ENTER_EMAIL });
              } else if (!validateEmail(formData.email)) {
                setFormData({ ...formData, emailError: Constants.VALID_EMAIL });
              } else {
                setFormData({ ...formData, emailError: '' });
              }
            }}
          />

          {/* Enter Your 6-Digit Pin */}
          <TextInputField
            style={styles.textInput_rootContainer}
            placeholder={Constants.DIGIT_PIN}
            secureTextEntry
            keyboardType={'numeric'}
            maxLength={6}
            value={formData.digitCode}
            onChangeText={(text) => setFormData({ ...formData, digitCode: text })}
            textError={formData.digitCodeError}
            disableEyeIcon
            onBlur={() => {
              if (formData.digitCode === '') {
                setFormData({ ...formData, digitCodeError: Constants.ENTER_DIGIT_CODE });
              } else if (formData.digitCode.length !== 6) {
                setFormData({ ...formData, digitCodeError: Constants.PIN_REQUIRED });
              } else {
                setFormData({ ...formData, digitCodeError: '' });
              }
            }}
          />

          {/* Re-enter Your 6-Digit Pin */}
          <TextInputField
            style={styles.textInput_rootContainer}
            placeholder={Constants.DIGIT_PIN_02}
            secureTextEntry
            keyboardType={'numeric'}
            maxLength={6}
            value={formData.confirmDigitCode}
            onChangeText={(text) => setFormData({ ...formData, confirmDigitCode: text })}
            disableEyeIcon
            textError={formData.confirmDigitCodeError}
            onBlur={() => {
              if (formData.confirmDigitCode === '') {
                setFormData({ ...formData, confirmDigitCodeError: Constants.ENTER_DIGIT_CODE });
              } else if (formData.confirmDigitCode.length !== 6) {
                setFormData({ ...formData, confirmDigitCodeError: Constants.PIN_REQUIRED });
              } else if (formData.confirmDigitCode !== formData.digitCode) {
                setFormData({ ...formData, confirmDigitCodeError: Constants.CONFIRM_PIN_MISMATCH });
              } else {
                setFormData({ ...formData, confirmDigitCodeError: '' });
              }
            }}
          />

          {/* Sign Up Button */}
          <PrimaryButton
            style={styles.buttonStyle}
            title={Constants.SIGN_UP}
            onPress={onPressSignUp}
            loading={loading}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateAccount;

const numberData = [
  {
    label: 'India',
    image: 'https://cdn.pixabay.com/photo/2016/03/09/19/24/flag-1247218_640.jpg',
    value: '+44',
  },
];

const defaultValue = {
  label: 'UK',
  image: 'https://cdn.pixabay.com/photo/2016/03/09/19/24/flag-1247218_640.jpg',
  value: '+44',
};
