import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { ColorSheet } from '@/utils/ColorSheet';
import TransferWelcomeDashboardComponent from '@/components/transaction/transferWelcomeDashboard';
import { Constants } from './constants';
import { styles } from './styles';
import TransferSavingRecieving from '@/components/transaction/transferSavingReceiving';
import DashedBorder from '@/assets/svg/transaction/dashedBorder.svg';
import SecondaryButton from '@/components/buttons/secondaryButton';
import CurrencyCoveter from '@/components/transaction/currency_convater';

import { useSharedValue } from 'react-native-reanimated';
import ImageSlider from '@/components/image_slider';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      {/* Status Bar */}
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent={true} />

      {/* Image */}
      <Image
        style={styles.backgroundImage}
        source={require('@/assets/images/Transaction/BestWelcomeDashboard.png')}
      />

      {/* Welcome, Name And LogOut */}
      <TransferWelcomeDashboardComponent
        imageSource={require('@/assets/images/Transaction/WelcomeProfilePic.png')}
        title={Constants.WELCOME_BACK}
        name={'Arianna'}
        onPress={() => {
          console.log('logOut');
        }}
      />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* mainContainer */}
        <View style={styles.mainContainer}>
          {/* ExChange Rate */}
          <View style={styles.exchangeContainer}>
            <Text style={styles.exchangeText}>
              {Constants.EXCHANGE_RATE}:
              <Text style={styles.exchangeAmount}> £{'1=107.34 INR'} </Text>
            </Text>
          </View>

          <CurrencyCoveter
            sendingAmountValue={'1000.00'}
            onChangeSendingAmount={(text) => console.log(text)}
            sendingCurrency={'GBP'}
            receivingAmountValue={'1714.00'}
            onChangeReceivingAmount={(text) => console.log(text)}
            receivingCurrency={'INR'}
            sendingCurrencySource={require('@/assets/images/Transaction/CountryUk.png')}
            receivingCurrencySource={require('@/assets/images/Transaction/countryIndia.png')}
          />

          {/* Dashed Border */}
          <DashedBorder style={styles.dashedBorder} />

          <View style={styles.feesTotalPaymentContainer}>
            <Text style={styles.text01}>Fee : £0.00</Text>

            <Text style={styles.text01}>Total Pay: £1000 </Text>
          </View>

          <DashedBorder style={styles.dashedBorder} />

          <SecondaryButton
            title={Constants.SEND}
            onPress={() => {
              navigation.navigate('TransferEnterAmountScreen')
            }}
            style={styles.btnContainer}
          />

          <ImageSlider />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
