import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import { ColorSheet } from '@/utils/ColorSheet';
import { styles } from './styles';
import PrimaryDropDown from '@/components/dropdowns/primary_dropdown';
import NumberInput from '@/components/input/NumberInput';
import OTPInput from '@/components/input/OTPInput';

const OtpVerification = () => {
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

        <OTPInput
          mask={true}
          cellCount={4}
          style={{
            with: '100%',
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OtpVerification;
