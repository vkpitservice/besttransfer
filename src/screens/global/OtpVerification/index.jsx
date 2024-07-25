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
        <NumberInput
          style={{
            marginTop: 200,
            marginHorizontal: 10,
          }}
          placeholder='Enter Your Phone Number'
          onChange={(value) => console.log(value)}
          value={{
            _index: 0,
            image:
              'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
            label: 'United States (+1)',
            value: '+1',
          }}
          data={[
            {
              label: 'United States (+1)',
              value: '+1',
              image:
                'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
            },
            {
              label: 'Nigeria (+234)',
              value: '+234',
              image:
                'https://static8.depositphotos.com/1368026/848/i/950/depositphotos_8486619-stock-photo-union-jack-uk-flag.jpg',
            },
            {
              label: 'Ghana (+233)',
              value: '+233',
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpi78RGc4DrxUbsYOyrpcBy00ehpC8ZNGq8w&s',
            },
            {
              label: 'Kenya (+254)',
              value: '+254',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1200px-Flag_of_Kenya.svg.png',
            },
          ]}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OtpVerification;
