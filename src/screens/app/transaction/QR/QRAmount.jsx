import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  View,
  TextInput
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Constants } from './constants';
import { styles } from './styles';
import { styles as currencyConvertor } from '@/components/transaction/currency_convater/styles';
import SecondaryButton from '@/components/buttons/secondaryButton';
import { StackActions, useNavigation } from '@react-navigation/native';
import BackTitleAddComponent from '@/components/BackTitleAdd';
import { ErrorFlash } from '@/utils/flashMessage';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';
import { ColorSheet } from '@/utils/ColorSheet';
import postRequest from '@/components/NetworkRequest/postRequest';
import { DefaultConstants } from '@/utils/Constants';
import GetLocation from 'react-native-get-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getRequest from '@/components/NetworkRequest/getRequest';
import Spinner from 'react-native-loading-spinner-overlay';

const QRAmount = ({ route }) => {
  const navigation = useNavigation();
  const { upi } = route.params;
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [currency, setcurrency] = useState("INR");
  const [loading, setLoading] = useState(false);
  const [transactionInterval, settransactionInterval] = useState();
  const [transactionstatuscounter, setTransactionStatusCounter] = useState(0);
  const [transactionId, setTransactionId] = useState();
  const [mc, setmc] = useState("");
  const [pa, setpa] = useState("");
  const [pn, setpn] = useState("");
  const [overlay, setoverlay] = useState(false);

  const completePayment = async () => {
    console.log(amount);
    
    if (amount == "" || amount == null) {
      ErrorFlash('Please enter amount');
    }
    else {
      setoverlay(true)
      setLoading(true)
      console.log(amount);
      
      await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      })
        .then(location => {
          console.log(location);
          createTransaction(location.latitude, location.longitude)
        })
        .catch(error => {
          const { code, message } = error;
          console.warn(code, message);
          setLoading(false)
          setoverlay(false)
        })
    }
  }

  const createTransaction = async (latitude, longitude) => {
    let token = await AsyncStorage.getItem('login_token');
    const response = await postRequest(DefaultConstants.BASE_URL + 'transaction/submit-upi', {
      amount: parseInt(amount),
      message: reason,
      upi_id: pa,
      merchant_code: mc,
      account_name: pn,
      currency: currency,
      longitude: longitude,
      latitude: latitude
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    console.log(response);
    if(response[0]==200)
    {
      console.log(response[1].data.transaction_id);
        setTransactionId(response[1].data.transaction_id)
    }
    else{
      ErrorFlash(response[1])
      setLoading(false)
      setoverlay(false)
    }
  }

  const getTransactionsStatusDetails = async() =>{
    const interval = (setInterval(function(){
      if(transactionId!="" && transactionId!=null && transactionId!='undefined')
      {
        console.log("hihi"+transactionId);
        setTransactionStatusCounter(parseInt(transactionstatuscounter)+1)
        getTransactionStatus(transactionId)
      }
    },30000));
    settransactionInterval(interval)
  }

  const getTransactionStatus = async(id) =>{
    console.log(transactionstatuscounter);
    let token = await AsyncStorage.getItem('login_token');
    const response = await getRequest(DefaultConstants.BASE_URL + 'transaction/'+id, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    if(response[0]==200)
      {
        console.log(response[1].data.status);
        
        console.log("cpunter"+transactionstatuscounter);
        
        if(response[1].data.status=='success')
          {
            clearInterval(transactionInterval)
            setLoading(false)
            setoverlay(false)
            navigation.dispatch(StackActions.replace('QRTransactionStatus',{status:'success'}))
          }
          else
          if(response[1].data.status=='failed')
            {
              clearInterval(transactionInterval)
              setLoading(false)
              setoverlay(false)
              navigation.dispatch(StackActions.replace('QRTransactionStatus',{status:'failed'}))
            }
          else{
            if(transactionstatuscounter>=1)
            {
              clearInterval(transactionInterval)
              setLoading(false)
              setoverlay(false)
              navigation.dispatch(StackActions.replace('QRTransactionStatus',{status:'pending'}))
            }
          }
      }
      else{
        ErrorFlash(response[1])
        setLoading(false)
        setoverlay(false)
      }
  }
  const parseUrl = async () => {
    var regex = /[?&]([^=#]+)=([^&#]*)/g,
      params = {},
      match;
    while (match = regex.exec(upi)) {
      params[match[1]] = match[2];
    }
    console.log(params)
    setmc(params.mc);
    setpa(params.pa);
    setpn(params.pn)
  }
  // const checkTransactionStatus = async() =>{
  //   console.log("counter"+transactionstatuscounter);
  //   if(transactionstatus=='success')
  //   {
  //     navigation.dispatch(StackActions.replace('QRTransactionStatus',{status:'success'}))
  //   }
  //   else
  //   if(transactionstatus=='failed')
  //     {
  //       navigation.dispatch(StackActions.replace('QRTransactionStatus',{status:'failed'}))
  //     }
  //   else{
  //     if(transactionstatuscounter>=3)
  //     {
  //       navigation.dispatch(StackActions.replace('QRTransactionStatus',{status:'pending'}))
  //     }
  //   }
  // }
  useEffect(() => {
    parseUrl()
  }, [])
  useEffect(()=>{
    getTransactionsStatusDetails()
  },[transactionId,transactionstatuscounter])
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <Spinner
          visible={overlay}
          textContent={'Processing...'}
          textStyle={{color: '#FFF'}}
        />
      {/* Status Bar */}
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent={true} />
      {/* Image */}
      <Image
        style={styles.backgroundImage}
        source={require('@/assets/images/Transaction/TransferDashboard.png')}
      />
      {/* Back Header Title Add */}
      <BackTitleAddComponent
        title={'Enter Amount'}
        onPressBack={() => {
          navigation.goBack();
        }}
      />

      <ScrollView style={[styles.scrollView, { marginTop: 0 }]} showsVerticalScrollIndicator={false}>

        {/* mainContainer */}
        <View style={styles.mainContainer}>

          <View style={[{ marginBottom: 15, padding: widthPercentageToDP(2), borderWidth: 0, width: widthPercentageToDP(90), top: 40, justifyContent: 'space-between', }]}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Name</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <AntDesign name='checkcircle' size={20} color={ColorSheet.Green} style={{ marginRight: 10 }} />
              <Text style={{ fontSize: 18 }}>{pn}</Text>
            </View>
            <Text style={{ fontSize: 12, marginLeft: 30 }}>{pa}</Text>
          </View>

          <View style={[currencyConvertor.topContainerSingle, { marginBottom: 15 }]}>
            <TextInput
              placeholder='Enter Amount'
              value={amount}
              onChangeText={(text) => setAmount(text)}
              keyboardType='numeric'
              maxLength={5}
            />
            <View style={currencyConvertor.selectCurrencyView}>
              <Text style={currencyConvertor.currencyLabel}>INR</Text>
              <Image style={currencyConvertor.selectCurrencyLogo} source={require('@/assets/images/Transaction/countryIndia.png')} />
            </View>
          </View>


          <View style={currencyConvertor.topContainerSingle}>
            <TextInput
              placeholder='Enter Reason'
              value={reason}
              onChangeText={(text) => setReason(text)}
              keyboardType='default'
            />
          </View>

          <SecondaryButton
            title={Constants.SEND}
            onPress={completePayment}
            style={styles.btnContainer}
            loading={loading}
          />

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default QRAmount;
