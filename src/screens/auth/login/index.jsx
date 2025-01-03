import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import BestTransFer from '@/assets/svg/CreateAcc/Best_TransFer.svg';
import TextInputField from '@/components/input/TextInput';
import PrimaryButton from '@/components/buttons/primaryButton';
import { styles } from './styles';
import { Constants } from './constants';
import CustomCheckBox from '@/components/input/CustomCheckBox';
import { ErrorFlash } from '@/utils/flashMessage';
import postRequest from '@/components/NetworkRequest/postRequest';
import { DefaultConstants } from '@/utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorSheet } from '@/utils/ColorSheet';

const Login = ({ navigation }) => {
  const [loading, setloading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    emailError: '',
    digitCode: '',
    digitCodeError: '',
  });

  const onPressSubmit = async() => {
    if (formData.email == '') {
      ErrorFlash(Constants.Email_Id_Required);
    } else if (formData.digitCode == '') {
      ErrorFlash(Constants.Pin_Required);
    } else {
      setloading(true)
      var loginresp = await postRequest(DefaultConstants.BASE_URL + 'auth/token',{username:formData.email,password:formData.digitCode,grant_type:'password',device_token:"123456789"},{
        headers: {
          'Content-Type': 'application/json',
          'accept':'application/json'
        }
      });
      console.log(JSON.stringify(loginresp));
      
      if(loginresp[0]==200)
      {
        setAsyncData('login_token',loginresp[1].data.access_token)
        setAsyncData('login_first_name', loginresp[1].data.user.first_name);
        setAsyncData('login_last_name', loginresp[1].data.user.last_name);
        setAsyncData('login_mobile', loginresp[1].data.user.mobile);
        setAsyncData('login_email', loginresp[1].data.user.email);
        setAsyncData('login_kyc', loginresp[1].data.user.kyc_verified);
        setAsyncData('login_external_id', loginresp[1].data.user.external_id);
        setAsyncData('user_reference_id', loginresp[1].data.user.user_reference_id);
        setAsyncData('reg_id', JSON.stringify(loginresp[1].data.user.id));
        navigation.navigate('AppBottomTab');
      }
      else
      {
        ErrorFlash(loginresp[1])
      }
      setloading(false)
    }
  };
  const setAsyncData = async(key,value) =>{
    await AsyncStorage.setItem(key,value)
  }
  const getData = async() =>{
    setFormData({...formData,email: await AsyncStorage.getItem('login_email')});
  }
  useEffect(()=>{
    getData()
  },[])
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
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            style={styles.email_Field}
            placeholder={Constants.ENTER_EMAIL_TEXT}
          />

          <TextInputField
            value={formData.digitCode}
            onChangeText={(text) => setFormData({ ...formData, digitCode: text })}
            secureTextEntry
            style={styles.password_Field}
            placeholder={Constants.ENTER_PIN_TEXT}
            keyboardType={'numeric'}
            maxLength={6}
          />

          <View style={styles.rememberView}>
            <View style={styles.rememberLeftView}>
              {/* <CustomCheckBox />
              <Text style={styles.rememberLeftText}>{Constants.REMEMBER_ME_TEXT}</Text> */}
            </View>
            <TouchableOpacity style={styles.forgetPinButton}>
              <Text style={styles.forgetPinText}>{Constants.FORGOT_PIN_TEXT}</Text>
            </TouchableOpacity>
          </View>

          {/* Sign Up Button */}
          <PrimaryButton
            onPress={onPressSubmit}
            style={styles.buttonStyle}
            title={Constants.LOGIN_BUTTON_TEXT}
            loading={loading}
          />

          <View style={styles.footerView}>
            <Text style={styles.footerText}>{Constants.DONT_HAVE_ACCOUNT_TEXT}</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CreateAccountScreen');
              }}
              style={styles.registerButton}
            >
              <Text style={styles.registerButtonText}>{Constants.REGISTER_TEXT}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
