import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import BestTransFer from '@/assets/svg/CreateAcc/Best_TransFer.svg';
import { ColorSheet } from '@/utils/ColorSheet';
import TextInputField from '@/components/input/TextInput';
import PrimaryButton from '@/components/buttons/primaryButton';
import { styles } from './styles';
import { Constants } from './constants';

const CreateAnnAccount = ({ navigation }) => {
  const [displayVisibleWindow, setDisplayVisibleWindow] = useState('personal');

  const [mobileNumber, setMobileNumber] = useState('');

  const [code, setCode] = useState({
    label: '',
    value: '',
  });

  const onPressPersonal = () => {
    setDisplayVisibleWindow('personal');
  };

  const onPressBusiness = () => {
    setDisplayVisibleWindow('business');
  };

  return (
    <ImageBackground
      source={require('@/assets/images/CreateAccountBG/Create_an_account.png')}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <StatusBar
              barStyle = 'dark-content'
              backgroundColor = {ColorSheet.PrimaryButton}
              translucent
            /> */}

        {/* Logo */}
        <View style={styles.best_transFer_Svg_container}>
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
            style={styles.textInput_Field}
            containerStyle={styles.textInput_container}
            placeholder={Constants.Email_Id}
            keyboardType={'email-address'}
          />

          {/* Enter Your 6-Digit Pin */}
          <TextInputField
            style={styles.textInput_Field}
            containerStyle={styles.textInput_container}
            placeholder={Constants.DIGIT_PIN}
            secureTextEntry
          />

          {/* Re-enter Your 6-Digit Pin */}
          <TextInputField
            style={styles.textInput_Field}
            containerStyle={styles.textInput_container}
            placeholder={Constants.DIGIT_PIN_02}
            secureTextEntry
          />

          {/* Sign Up Button */}
          <PrimaryButton style={styles.buttonStyle} title={'Sign Up'} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default CreateAnnAccount;

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
