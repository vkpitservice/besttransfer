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
import React, { useState } from 'react';
import { ColorSheet } from '@/utils/ColorSheet';
import { styles } from './styles';
import PrimaryDropDown from '@/components/dropdowns/primary_dropdown';
import NumberInput from '@/components/input/NumberInput';
import OTPInput from '@/components/input/OTPInput';
import { Constants } from './constants';
import PrimaryButton from '@/components/buttons/primaryButton';
import { useUpdateEffect } from '@/utils/useUpdateEffect';
import { ErrorFlash } from '@/utils/flashMessage';

const OtpVerification = ({ navigation }) => {
  const [isResendSuccessVisible, setResendSuccessVisible] = useState(false);
  const [otp, setOtp] = useState();

  useUpdateEffect(() => {
    if (isResendSuccessVisible) {
      setTimeout(() => {
        setResendSuccessVisible(false);
      }, 3000);
    }
  }, [isResendSuccessVisible]);

  const onPressSubmit = () => {
    if (otp?.length !== 6) {
      ErrorFlash(Constants.ENTER_VALID_OTP);
    } else {
      navigation.navigate('RegisterSuccessFullScreen');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent={true} />

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

        <View style={styles.numberView}>
          <Text style={styles.numberText}>+44 789 675 4321</Text>
          <TouchableOpacity style={styles.changeButton}>
            <Text style={styles.changeText}>{Constants.CHANGE}</Text>
          </TouchableOpacity>
        </View>

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
            onPress={() => {
              setResendSuccessVisible(true);
            }}
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

        <PrimaryButton title='Submit' onPress={onPressSubmit} style={styles.button} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OtpVerification;
