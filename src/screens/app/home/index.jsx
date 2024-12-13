import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import TransferWelcomeDashboardComponent from '@/components/transaction/transferWelcomeDashboard';
import { Constants } from './constants';
import { styles } from './styles';
import { styles as currencyConvertor } from '../../../../src/components/transaction/currency_convater/styles';
import DashedBorder from '@/assets/svg/transaction/dashedBorder.svg';
import SecondaryButton from '@/components/buttons/secondaryButton';
import CurrencyCoveter from '@/components/transaction/currency_convater';

import ImageSlider from '@/components/image_slider';
import { StackActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import AnimatedTextInput from '@/components/input/AnimatedTextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Rotate from '@/assets/svg/transaction/Rotate.svg';
import postRequest from '@/components/NetworkRequest/postRequest';
import { DefaultConstants } from '@/utils/Constants';
import { ErrorFlash } from '@/utils/flashMessage';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const logout = async () => {
    await AsyncStorage.clear();
    navigation.dispatch(StackActions.replace('LoginScreen'));
  }
  const getData = async () => {
    setName(await AsyncStorage.getItem('login_first_name') + ' ' + await AsyncStorage.getItem('login_last_name'))
  }
  useEffect(() => {
    getData()
  }, [])

  const [exchangeRate, setExchangeRate] = useState('0.00');
  const timeout = useRef(null);
  const position1 = useSharedValue(0);
  const position2 = useSharedValue(1);
  const [loading, setLoading] = useState(false);
  const [fee, setFees] = useState('0.00');
  const [totalAmount, setTotalAmount] = useState('0.00');
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(position1.value * 85) }],
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(position2.value * 85) }],
    };
  });

  const getConversionData = async (val, from, to) => {
    console.log(val);
    console.log(from);
    console.log(to);
    setLoading(true)
    setAmount(val);
    setFromCurrency(from);
    setToCurrency(to);
    const token = await AsyncStorage.getItem('login_token');
    const resp = await postRequest(DefaultConstants.BASE_URL + 'currency/get-conversion', {
      amount: val,
      from_currency: from,
      to_currency: to
    }, {
      headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    console.log(JSON.stringify(resp));
    if (resp[0] != '400') {
      console.log(JSON.stringify(resp[1]));
      setLoading(false)
    }
    else {
      ErrorFlash(resp[1])
      setLoading(false)
    }
  }

  const onChangeHandler = (value, from, to) => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      getConversionData(value, from, to)
    }, 2000);
  }

  const navigateToScreen = async() =>{
    await setAsyncdata('fees',fee)
    await setAsyncdata('totalAmount',totalAmount)
    await setAsyncdata('amount',amount)
    await setAsyncdata('fromCurrency',fromCurrency)
    await setAsyncdata('toCurrency',toCurrency)
    await setAsyncdata('exchangeRate',exchangeRate)
    navigation.navigate('NotificationStack')
  }
  const setAsyncdata = async(key,value) =>{
    await AsyncStorage.setItem(key,value);
  }

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
        name={name}
        onPress={logout}
        // onPressProfile={() => navigation.navigate('EditProfileScreen')}
      />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* mainContainer */}
        <View style={styles.mainContainer}>
          {/* ExChange Rate */}
          {exchangeRate &&
            <View style={styles.exchangeContainer}>
              <Text style={styles.exchangeText}>
                {Constants.EXCHANGE_RATE}:
                <Text style={styles.exchangeAmount}> £{'1='+exchangeRate+' INR'} </Text>
              </Text>
            </View>
          }

          {/* <CurrencyCoveter
            onChangeSendingAmount={(text) => console.log(text)}
            sendingCurrency={'GBP'}
            onChangeReceivingAmount={(text) => console.log(text)}
            receivingCurrency={'INR'}
            sendingCurrencySource={require('@/assets/images/Transaction/CountryUk.png')}
            receivingCurrencySource={require('@/assets/images/Transaction/countryIndia.png')}
            exchangerate={(text) => console.log(text)}
          /> */}


          <View style={[currencyConvertor.topContainer]}>
            <Animated.View style={[currencyConvertor.currencyInputView, animatedStyle1]}>
              <AnimatedTextInput
                onChangeText={value => { onChangeHandler(value, 'GBP', 'INR') }}
                // value={}
                placeholder={'Sending Amount'}
              />

              <View style={currencyConvertor.selectCurrencyView}>
                <Text style={currencyConvertor.currencyLabel}>GBP</Text>
                <Image style={currencyConvertor.selectCurrencyLogo} source={require('@/assets/images/Transaction/CountryUk.png')} />
              </View>
            </Animated.View>

            <View style={currencyConvertor.coveterView}>
              <TouchableOpacity style={currencyConvertor.coveterButton}>
                <Rotate width={20} height={18} />
              </TouchableOpacity>
            </View>

            <Animated.View style={[currencyConvertor.currencyInputView, animatedStyle2]}>
              <AnimatedTextInput
                onChangeText={value => { onChangeHandler(value, 'INR', 'GBP') }}
                // value={receivingAmountValue}
                placeholder={'Receiving Amount'}
              />

              <View style={currencyConvertor.selectCurrencyView}>
                <Text style={currencyConvertor.currencyLabel}>INR</Text>
                <Image style={currencyConvertor.selectCurrencyLogo} source={require('@/assets/images/Transaction/countryIndia.png')} />
              </View>
            </Animated.View>
          </View>

          {/* Dashed Border */}
          <DashedBorder height={2} style={styles.dashedBorder} />

          <View style={styles.feesTotalPaymentContainer}>
            <Text style={styles.text01}>Fee : £{fee}</Text>

            <Text style={styles.text01}>Total Pay: £{totalAmount} </Text>
          </View>

          <DashedBorder height={2} style={styles.dashedBorder} />

          <SecondaryButton
            title={Constants.SEND}
            onPress={navigateToScreen}
            style={styles.btnContainer}
          />

          <ImageSlider />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
