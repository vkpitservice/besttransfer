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

const CreateAccount = ({ navigation }) => {
  const [displayVisibleWindow, setDisplayVisibleWindow] = useState('personal');

  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    emailError: '',
    digitCode: '',
    digitCodeError: '',
    confirmDigitCode: '',
    confirmDigitCodeError: '',
  });

  const defaultValue = {
    label: 'India',
    image: 'https://cdn.countryflags.com/thumbs/india/flag-square-250.png',
    value: '+988',
  };

  const [code, setCode] = useState(defaultValue);

  const onPressPersonal = () => {
    setDisplayVisibleWindow('personal');
  };

  const onPressBusiness = () => {
    setDisplayVisibleWindow('business');
  };

  const onPressSignUp = () => {
    if (formData.email == '') {
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
      navigation.navigate('ResidentCountryScreen');
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
          <NumberInput
            style={styles.dropDown_rootContainer}
            data={numberData}
            value={code}
            onChange={(value) => setCode(value)}
            valueNumber={formData.phoneNumber}
            onChangeNumber={(number) => setFormData({ ...formData, phoneNumber: number })}
            placeholder={Constants.PHONE_NUM}
          />

          {/* TextInput Filed */}
          {/* Enter your email id * */}
          <TextInputField
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
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateAccount;

const numberData = [
  {
    label: 'SriLanka',
    value: '+94',
    image:
      'https://w7.pngwing.com/pngs/214/565/png-transparent-flag-of-sri-lanka-national-flag-nuwaragam-palatha-central-divisional-secretariat-flag-of-the-maldives-flag-miscellaneous-flag-text.png',
  },
  {
    label: 'Uk',
    value: '+91',
    image: 'https://cdn.pixabay.com/photo/2016/03/09/19/24/flag-1247218_640.jpg',
  },
  {
    label: 'India',
    image: 'https://cdn.countryflags.com/thumbs/india/flag-square-250.png',
    value: '+988',
  },
  {
    label: 'UAE',
    image: 'https://seeklogo.com/images/U/United_Kingdom-logo-C3E4A743BB-seeklogo.com.png',
    value: '+44',
  },
];
