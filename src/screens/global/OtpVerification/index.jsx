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

        <PrimaryDropDown
          style={{
            marginTop: 200,
            marginHorizontal: 10,
          }}
          placeholder='Select a reason'
          onChange={(value) => console.log(value)}
          data={[
            {
              label: 'Savings & Family Support',
              value: '1',
            },
            {
              label: 'Tax payment',
              value: '2',
            },
            {
              label: 'Utility bill pauments',
              value: '3',
            },
            {
              label: 'Local account Payment',
              value: '4',
            },
            {
              label: 'Educational Institutions ',
              value: '5',
            },
          ]}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OtpVerification;
