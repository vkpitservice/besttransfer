import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ColorSheet } from '@/utils/ColorSheet';
import { styles } from './styles';
import OTPInput from '@/components/input/OTPInput';
import { Constants } from './constants';
import PrimaryButton from '@/components/buttons/primaryButton';
import { useUpdateEffect } from '@/utils/useUpdateEffect';
import { ErrorFlash } from '@/utils/flashMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextInputField from '@/components/input/TextInput';
import postRequest from '@/components/NetworkRequest/postRequest';
import { DefaultConstants } from '@/utils/Constants';
import patchRequest from '@/components/NetworkRequest/patchRequest';
import { StackActions } from '@react-navigation/native';
import getRequest from '@/components/NetworkRequest/getRequest';

const OtpVerification = ({ navigation }) => {
  const [isResendSuccessVisible, setResendSuccessVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [change, setChange] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [newMobileNumber, setNewMobileNumber] = useState("");
  const [otp, setOtp] = useState();

  useUpdateEffect(() => {
    if (isResendSuccessVisible) {
      setTimeout(() => {
        setResendSuccessVisible(false);
      }, 3000);
    }
  }, [isResendSuccessVisible]);

  const onPressSubmit = async () => {
    if (otp?.length !== 6) {
      ErrorFlash(Constants.ENTER_VALID_OTP);
    } else {
      setLoading(true)
      let token = await AsyncStorage.getItem('reg_access_token');
      console.log(DefaultConstants.BASE_URL + 'otp/validate-otp/'+otp);
      console.log({
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });
      
      var otpvalidateresp = await getRequest(DefaultConstants.BASE_URL + 'otp/validate-otp/'+otp, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });
      if(otpvalidateresp[0]==200)
      {
          var otpresp = await postRequest(DefaultConstants.BASE_URL + 'otp/validate-email', { source: DefaultConstants.SOURCE_NAME }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          });
          navigation.dispatch(StackActions.replace('EmailOtpVerificationScreen'));
      }
      else
      {
        ErrorFlash(otpvalidateresp[1])
      }
      setLoading(false)
    }
  };
  const getData = async () => {
    setMobileNumber(await AsyncStorage.getItem('reg_mobile'));
  }
  const resendOtp = async() =>{
    let token = await AsyncStorage.getItem('reg_access_token');
    var otpresp = await postRequest(DefaultConstants.BASE_URL + 'otp/validate-mobile', { source: DefaultConstants.SOURCE_NAME }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    if(otpresp[0]==200)
      setResendSuccessVisible(true);
    else
      ErrorFlash("Error in triggering OTP");
  }
  const updateMobile = async () => {
    let token = await AsyncStorage.getItem('reg_access_token');
    let firstName = await AsyncStorage.getItem('reg_first_name');
    let lastName = await AsyncStorage.getItem('reg_last_name');
    if(newMobileNumber.length<10)
    {
      ErrorFlash(Constants.ENTER_VALID_MOBILE)
    }
    else
    {
    var changemobile = await patchRequest(DefaultConstants.BASE_URL + 'user/update-user', { mobile: newMobileNumber,first_name:firstName,last_name:lastName }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    console.log("return resp"+JSON.stringify(changemobile));
    
    if (changemobile[0] == 200) {
      setMobileNumber(newMobileNumber)
      setAsyncData('reg_mobile',newMobileNumber);
      resendOtp();
      setChange(false);
    }
    else {
      ErrorFlash(changemobile[1])
    }
  }
  }
  useEffect(() => {
    getData()
  },[])
  const setAsyncData= async(key,val)=>{
    await AsyncStorage.setItem(key, val);
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
          source={require('@/assets/images/MainBackground.png')}
          style={styles.backgroundImage}
        />

        <Text style={styles.title}>{Constants.TITLE}</Text>
        <Image source={require('@/assets/images/OTP.png')} style={styles.otp_logo} />
        <Text style={styles.verification}>{Constants.MOBILE_VERIFICATION_TEXT}</Text>
        <Text style={styles.otpText}>{Constants.ENTER_OTP_TEXT}</Text>

        {!change ?
          <View style={styles.numberView}>
            <Text style={styles.numberText}>+44 {mobileNumber}</Text>
            <TouchableOpacity onPress={() => setChange(true)} style={styles.changeButton}>
              <Text style={styles.changeText}>{Constants.CHANGE}</Text>
            </TouchableOpacity>
          </View>
          :
          <View style={[styles.numberView, {}]}>
            <Text style={styles.numberText}>+44</Text>
            <TextInputField
              style={styles.textInput_rootContainer}
              secureTextEntry={false}
              placeholder={"Enter Your Mobile Number"}
              keyboardType={'number-pad'}
              onChangeText={(text) => {
                let mobile = text.replace(/\s+/g, '');
                setNewMobileNumber(mobile)
              }}
              value={newMobileNumber}
              maxLength={10}
            />
            <TouchableOpacity onPress={updateMobile} style={styles.changeButton}>
              <Text style={styles.changeText}>{Constants.UPDATE}</Text>
            </TouchableOpacity>
          </View>
        }

        <OTPInput
          mask={true}
          cellCount={6}
          style={styles.otpInput}
          onChangeValue={(otp) => {
            setOtp(otp);
          }}
        />

        <View style={styles.resendView}>
          <Text style={styles.resendText}>{Constants.DIDNT_RECEIVE_OTP_TEXT}</Text>
          <TouchableOpacity
            onPress={resendOtp}
            style={styles.resendButton}
          >
            <Text style={styles.resendButtonText}>{Constants.RESEND_OTP_TEXT}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resendSuccessView}>
          {isResendSuccessVisible && (
            <View style={styles.resendSuccessTextContainer}>
              <Text style={styles.resendSuccessText}>{Constants.OTP_SUCCESS_TEXT}</Text>
            </View>
          )}
        </View>

        <PrimaryButton title='Submit' onPress={onPressSubmit} style={styles.button} loading={loading}/>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OtpVerification;
