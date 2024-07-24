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

const CreateAccount = ({ navigation }) => {
  const [displayVisibleWindow, setDisplayVisibleWindow] = useState('personal');

  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [digitCode, setDigitCode] = useState('');
  const [digitCodeError, setDigitCodeError] = useState('');

  const [confirmDigitCode, setConfirmDigitCode] = useState('');
  const [confirmDigitCodeError, setConfirmDigitCodeError] = useState('');

  const onPressPersonal = () => {
    setDisplayVisibleWindow('personal');
  };

  const onPressBusiness = () => {
    setDisplayVisibleWindow('business');
  };

  const onPressSignUp = () => {
    if (email == '') {
      ErrorFlash(Constants.ENTER_EMAIL);
    } else if (!validateEmail(email)) {
      ErrorFlash(Constants.VALID_EMAIL);
    } else if (digitCode.length == '') {
      ErrorFlash(Constants.ENTER_DIGIT_CODE);
    } else if (digitCode?.length !== 6) {
      ErrorFlash(Constants.PIN_REQUIRED);
    } else if (confirmDigitCode.length == '') {
      ErrorFlash(Constants.ENTER_DIGIT_CODE);
    } else if (digitCode != confirmDigitCode) {
      ErrorFlash(Constants.DIGIT_CODE_NOT_MATCH);
    } else {
      Alert.alert('Success');
    }
  };

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

          {/* User Choose Personal Or Business */}
          <View style={styles.row_bg_container}>
            <TouchableOpacity
              style={[
                styles.common_container,
                displayVisibleWindow == 'personal'
                  ? { backgroundColor: ColorSheet.buttonChose }
                  : { backgroundColor: 'transparent' },
              ]}
              onPress={onPressPersonal}
              activeOpacity={0.5}
            >
              <Text
                style={[
                  styles.common_txt_style,
                  displayVisibleWindow == 'personal'
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

          {/* DropDown */}
          {/* <PhoneNumberInput
        textInputStyle = {styles.textInput_Field}
        placeholder = {Constants.PHONE_NUM}
        onChangeCode = {(item) => {
          setCode(item)
        }}
        numberData = {numberData}
        code = {code.value}
        onChangeText = {(text) => {
          setMobileNumber(text)
        }}
      /> */}

          {/* TextInput Filed */}
          {/* Enter your email id * */}
          <TextInputField
            style={styles.textInput_rootContainer}
            placeholder={Constants.Email_Id}
            keyboardTyp={'email-address'}
            value={email}
            onChangeText={(text) => setEmail(text)}
            textError={emailError}
            onBlur={() => {
              if (email == '') {
                setEmailError(Constants.ENTER_EMAIL);
              } else if (!validateEmail(email)) {
                setEmailError(Constants.VALID_EMAIL);
              } else {
                setEmailError('');
              }
            }}
          />

          {/* Enter Your 6-Digit Pin */}
          <TextInputField
            style={styles.textInput_rootContainer}
            placeholder={Constants.DIGIT_PIN}
            secureTextEntry
            keyboardType={'numeric'}
            value={digitCode}
            onChangeText={(text) => setDigitCode(text)}
            textError={digitCodeError}
            disableEyeIcon
            onBlur={() => {
              if (digitCode.length == '') {
                setDigitCodeError(Constants.ENTER_DIGIT_CODE);
              } else if (digitCode?.length !== 6) {
                setDigitCodeError(Constants.PIN_REQUIRED);
              } else {
                setDigitCodeError('');
              }
            }}
          />

          {/* Re-enter Your 6-Digit Pin */}
          <TextInputField
            style={styles.textInput_rootContainer}
            placeholder={Constants.DIGIT_PIN_02}
            secureTextEntry
            keyboardType={'numeric'}
            value={confirmDigitCode}
            onChangeText={(text) => setConfirmDigitCode(text)}
            disableEyeIcon
            textError={confirmDigitCodeError}
            onBlur={() => {
              if (confirmDigitCode.length == '') {
                setConfirmDigitCodeError(Constants.ENTER_DIGIT_CODE);
              } else if (confirmDigitCode?.length !== 6) {
                setConfirmDigitCodeError(Constants.PIN_REQUIRED);
              } else if (confirmDigitCode !== digitCode) {
                setConfirmDigitCodeError(Constants.CONFIRM_PIN_MISMATCH);
              } else {
                setConfirmDigitCodeError('');
              }
            }}
          />

          {/* Sign Up Button */}
          <PrimaryButton
            style={styles.buttonStyle}
            title={Constants.SIGN_UP}
            onPress={onPressSignUp}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateAccount;

const numberData = [
  {
    label: 'https://seeklogo.com/images/U/United_Kingdom-logo-C3E4A743BB-seeklogo.com.png',
    value: '+44',
  },
  {
    label: 'https://cdn.pixabay.com/photo/2016/03/09/19/24/flag-1247218_640.jpg',
    value: '+91',
  },
  {
    label: 'https://cdn.countryflags.com/thumbs/india/flag-square-250.png',
    value: '+988',
  },
  {
    label: 'https://seeklogo.com/images/U/United_Kingdom-logo-C3E4A743BB-seeklogo.com.png',
    value: '+44',
  },
];
