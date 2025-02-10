import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    Text,
    View,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import { styles } from './styles';
  import BackTitleHomeComponent from '@/components/BackTitleHome';
  import { Constants } from './constants';
  import TransferDetailsEdit from '@/components/preview/transferDetailsEdit';
  import TextInputField from '@/components/input/TextInput';
  import PrimaryDropDown from '@/components/dropdowns/primary_dropdown';
  import PrimaryButton from '@/components/buttons/primaryButton';
  import { ErrorFlash } from '@/utils/flashMessage';
  import RecipientDetails from '@/components/preview/recipientDetails';
  import { StackActions, useFocusEffect } from '@react-navigation/native';
  import getRequest from '@/components/NetworkRequest/getRequest';
  import { DefaultConstants } from '@/utils/Constants';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const Wallet = ({ navigation,route }) => {
    const {totalAmount,enteredamount,fromCurrency,toCurrency,fees,exchangeRate} = route.params;
    const [from, setForm] = useState({
      reference: '',
      referenceError: '',
    });
  
    const [selectReason, setSelectReason] = useState({
      label: '',
      value: '',
    });
  
    const handleContinue = () => {
      if (from.reference == '') {
        ErrorFlash(Constants.REFERENCE_REQUIRED);
      } else if (selectReason.value == '') {
        ErrorFlash(Constants.REASON_REQUIRE);
      } else {
          navigation.navigate('WalletBankDetails',{totalAmount:totalAmount,enteredamount:enteredamount,fromCurrency:fromCurrency,toCurrency:toCurrency,fees:fees,reference:from.reference,reason:selectReason.value,reasonLabel:selectReason.label,exchangeRate:exchangeRate});
      }
    };
  
    const getReasons = async() =>{
      let token = await AsyncStorage.getItem('login_token'); 
      const reasonsList = await getRequest(DefaultConstants.BASE_URL+'transaction/reasons?benificiary_type=individual', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });
      (reasonsList[1].data).map((singleReason)=>{
        console.log("single"+JSON.stringify(singleReason));
        listReason.push({
          'label':singleReason.name,
          'value': singleReason.code
        })
      })
    }
    useEffect(()=>{
      getReasons();
    },[])
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        {/* StatusBar */}
        <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent={true} />
  
        {/* ScrollView */}
        <ScrollView
          contentContainerStyle={styles.scroll_container}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* Back And Header And Home */}
          <BackTitleHomeComponent
            style={styles.titleHeaderContainer}
            title={Constants.HEADER_TITLE}
            onPressBack = {() => {
                           navigation.goBack()
                       }}
                       onPressHome = {() => {
                          navigation.dispatch(StackActions.replace('AppBottomTab'))
                       }}
          />
  
          {/* Image */}
          <Image
            style={styles.imageBackground}
            source={require('@/assets/images/beneficiary/SelectBeneficiary.png')}
          />
  
          {/* Main Container */}
          <View style={styles.main_Container}>
            {/* Transfer Details */}
            <View style={styles.transferDetailsContainer}>
              {/* Row Container */}
              <View style={styles.rowContainer}>
                <Text style={styles.commonTextTitle}> {Constants.TRANSFER_DETAILS} </Text>
                <Text style={styles.commonTextTitle}> {Constants.EDIT_AMOUNT} </Text>
              </View>
              {/* Exchange rae */}
              <TransferDetailsEdit
                exchangeRate={exchangeRate}
                send={'£1'}
                recieve={previewData[0].transferDetails.exchange[0].receive}
                theyRecieve={totalAmount}
                youSend={JSON.parse(enteredamount)}
                fee={fees}
                totalPayment={parseFloat(parseFloat(JSON.parse(enteredamount)) - parseFloat(JSON.parse(fees))).toFixed(2)}
              />
            </View>
  
            
            {/* Reference Input Field */}
            <TextInputField
              placeholder={Constants.REFERENCE}
              value={from.reference}
              onChangeText={(text) => setForm({ ...from, reference: text })}
              textError={from.referenceError}
              onFocus={() => setForm({ ...from, reasonError: '' })}
              onBlur={() => {
                if (!from.reference) {
                  setForm({ ...from, referenceError: Constants.REFERENCE_REQUIRED });
                } else {
                  setForm({ ...from, referenceError: '' });
                }
              }}
            />
  
            {/* DropDown */}
            <PrimaryDropDown
              style={styles.dropContainer}
              data={listReason}
              placeholder={Constants.SELECT_REASON}
              value={selectReason.value}
              onChange={setSelectReason}
            />
  
            {/* Continue Button */}
            <PrimaryButton
              style={styles.btnContainer}
              title={Constants.BTN_NAME}
              onPress={handleContinue}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  export default Wallet;
  
  const listReason = [];
  
  const previewData = [
    {
      transferDetails: {
        exchange: [
          {
            send: '1GBP',
            receive: '105.56INR',
          },
        ],
        theyReceive: '13,665',
        youSend: '139.65',
        fee: '2.00',
        totalPayment: '1003.99',
      },
      recipientDetails: {
        name: 'Arianna Craigg',
        accNumber: 88456912,
        ifscCode: '040004',
      },
    },
  ];
  