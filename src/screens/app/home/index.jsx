import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
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
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Spinner from 'react-native-loading-spinner-overlay';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [kyc, setKyc] = useState(true);
  const logout = async () => {
    await AsyncStorage.clear();
    navigation.dispatch(StackActions.replace('LoginScreen'));
  }
  const getData = async () => {
    setName(await AsyncStorage.getItem('login_first_name') + ' ' + await AsyncStorage.getItem('login_last_name'));
    if(await AsyncStorage.getItem('login_kyc')==0)
      setKyc(false)
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
  const [totalAmount, setTotalAmount] = useState("");
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [overlay, setoverlay] = useState(false);
  const [receiveMaxlength, setReceiveMaxlength] = useState(10);
  const [sendMaxlength, setSendMaxlength] = useState(10);

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
    if(from=='GBP')
    setAmount(val);
    else
    setTotalAmount(val);
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
      // resp[1].data.amount
      setExchangeRate(resp[1].data.conversion_rate)
      if(from=='GBP')
      setTotalAmount(resp[1].data.final_amount)
      else
      setAmount(resp[1].data.final_amount)
      setFees(resp[1].data.fees)
      setLoading(false)
    }
    else {
      ErrorFlash(resp[1])
      setLoading(false)
    }
  }

  const onChangeHandler = (value, from, to) => {
    setLoading(true)
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      if(value!="" && value!=null)
      getConversionData(value, from, to)
    }, 2000);
  }

  const navigateToScreen = async () => {
    if(amount=="" || amount==null)
    {
      ErrorFlash(Constants.SENDING_AMOUNt_ERROR)
    }
    else
    {
    await setAsyncdata('fees', JSON.stringify(fee))
    await setAsyncdata('totalAmount', JSON.stringify(totalAmount))
    await setAsyncdata('amount', JSON.stringify(amount))
    await setAsyncdata('fromCurrency', fromCurrency)
    await setAsyncdata('toCurrency', toCurrency)
    await setAsyncdata('exchangeRate', JSON.stringify(exchangeRate))
    navigation.navigate('NotificationStack')
    }
  }
  const setAsyncdata = async (key, value) => {
    await AsyncStorage.setItem(key, value);
  }
  const handleInputChange = async (value) => {

    const validated = value.match(/^\d*\.?\d{0,2}$/);
    if (validated) {
      setAmount(value);
      setTotalAmount("");
      setReceiveMaxlength(25)
      setSendMaxlength(10)
      onChangeHandler(value, 'GBP', 'INR')
    }
  }

  const handleReceivingInputChange = async (value) => {

    const validated = value.match(/^\d*\.?\d{0,2}$/);
    if (validated) {
      setAmount("");
      setTotalAmount(value);
      setReceiveMaxlength(10)
      setSendMaxlength(25)
      onChangeHandler(value, 'INR', 'GBP')
    }
  }

  const handleKyc = async () => {
    setoverlay(true)
    const login_mobile = await AsyncStorage.getItem('login_mobile');
    const response = await postRequest(DefaultConstants.FX_BASE_URL + 'API-FX-187-SUMSUB-URL', {
      "user_id": login_mobile
    }, {
      headers: {
        fx_key: DefaultConstants.FX_SUBSCRIPTION_KEY
      }
    });
    if(response[0]==200)
    {
      setoverlay(false)
      navigation.navigate('SumSub',{sumsuburl:response[1].data.url})
    }
    else
    {
      setoverlay(false)
      Alert.alert("Error",response[1]);
    }
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <Spinner
          visible={overlay}
          textContent={'Loading...'}
          textStyle={{color: '#FFF'}}
        />
      {/* Status Bar */}
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent={true} />

      {/* Image */}
      <Image
        style={styles.backgroundImage}
        source={require('@/assets/images/Transaction/BestWelcomeDashboard.png')}
      />

      {/* Welcome, Name And LogOut */}
      <TransferWelcomeDashboardComponent
        imageSource={require('@/assets/images/user-profile.jpg')}
        title={Constants.WELCOME_BACK}
        name={name}
        onPress={logout}
      // onPressProfile={() => navigation.navigate('EditProfileScreen')}
      />
      <ScrollView style={!kyc ? styles.scrollViewKyc : styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* mainContainer */}
        {!kyc && <Pressable onPress={handleKyc} style={{ width: '100%',marginBottom:hp(3)}} ><Image source={require('@/assets/images/kyc.png')} resizeMode='stretch' style={{ width: '100%',height:150 }} /></Pressable> }
        <View style={styles.mainContainer}>
          {/* ExChange Rate */}
          {exchangeRate && exchangeRate != '0.00' &&
            <View style={styles.exchangeContainer}>
              <Text style={styles.exchangeText}>
                {Constants.EXCHANGE_RATE}:
                <Text style={styles.exchangeAmount}> £{'1=' + exchangeRate + ' INR'} </Text>
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


          <View style={[!kyc ? currencyConvertor.topContainerKyc : currencyConvertor.topContainer]}>
            <Animated.View style={[currencyConvertor.currencyInputView, animatedStyle1]}>
              <AnimatedTextInput
                onChangeText={handleInputChange}
                value={amount}
                maxLength={sendMaxlength}
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
                onChangeText={handleReceivingInputChange}
                value={totalAmount}
                maxLength={receiveMaxlength}
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
          {!loading ?
            <View style={styles.feesTotalPaymentContainer}>
              <Text style={styles.text01}>Fee : £{fee}</Text>

              <Text style={styles.text01}>Total to Pay: £{parseFloat(amount - fee).toFixed(2)} </Text>
            </View>
            :
            <View style={styles.feesTotalPaymentContainer}>
              <Text style={{ justifyContent: 'center', alignItems: 'center' }}>loading...</Text>
            </View>
          }


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
