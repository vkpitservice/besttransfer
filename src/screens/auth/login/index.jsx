import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
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
import CustomCheckBox from '@/components/input/CustomCheckBox';

const Login = ({ navigation }) => {
  const [displayVisibleWindow, setDisplayVisibleWindow] = useState('personal');

  const [mobileNumber, setMobileNumber] = useState('');

  const [code, setCode] = useState({
    label: '',
    value: '',
  });

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
          style={styles.backgroundImage}
        />

        {/* Logo */}
        <View style={styles.logo_container}>
          <BestTransFer width={130} height={130} />
        </View>

        {/* Main Container */}
        <View style={styles.main_container}>
          {/* Header Title */}
          <Text style={styles.titleText}>{Constants.WELCOME_TEXT}</Text>

          <Text style={styles.subTitleText}>{Constants.LOGIN_TEXT}</Text>

          <TextInputField 
            style={styles.email_Field} 
            placeholder={Constants.ENTER_EMAIL_TEXT} 
          />

          <TextInputField
            secureTextEntry
            style={styles.password_Field}
            placeholder={Constants.ENTER_PIN_TEXT}
            keyboardType={'numeric'}
          />

          <View style={styles.rememberView}>
            <View style={styles.rememberLeftView}>
              <CustomCheckBox />
              <Text style={styles.rememberLeftText}>{Constants.REMEMBER_ME_TEXT}</Text>
            </View>
            <TouchableOpacity style={styles.forgetPinButton}>
              <Text style={styles.forgetPinText}>{Constants.FORGOT_PIN_TEXT}</Text>
            </TouchableOpacity>
          </View>

          {/* Sign Up Button */}
          <PrimaryButton style={styles.buttonStyle} title={Constants.LOGIN_BUTTON_TEXT} />

          <View style={styles.footerView}>
            <Text style={styles.footerText}>{Constants.DONT_HAVE_ACCOUNT_TEXT}</Text>
            <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.registerButtonText}>{Constants.REGISTER_TEXT}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
