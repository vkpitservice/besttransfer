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
  import React, { useState } from 'react';
  import { Constants } from './constants';
  import { styles } from './styles';
  import { styles as currencyConvertor } from '@/components/transaction/currency_convater/styles';
  import SecondaryButton from '@/components/buttons/secondaryButton';
  import { useNavigation } from '@react-navigation/native';
import BackTitleAddComponent from '@/components/BackTitleAdd';
import { ErrorFlash } from '@/utils/flashMessage';
  
  const QRAmount = ({route}) => {
    const navigation = useNavigation();
    const {upi} = route.params;
    const [amount, setAmount] = useState("");
    
    const completePayment = async() =>{
        if(amount=="" || amount==null)
        {
            ErrorFlash('Please enter amount');
        }
        else
        {
            
        }
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
        source={require('@/assets/images/Transaction/TransferDashboard.png')}
      />
            {/* Back Header Title Add */}
            <BackTitleAddComponent
                title={'Enter Amount'}
                onPressBack={() => {
                    navigation.goBack();
                }}
            />
        
        <ScrollView style={[styles.scrollView,{marginTop:0}]} showsVerticalScrollIndicator={false}>
        
          {/* mainContainer */}
          <View style={styles.mainContainer}>
            
            <View style={currencyConvertor.topContainerSingle}>
              <TextInput 
                placeholder='Enter Amount'
                value={amount}
                onChange={(text)=>setAmount(text)}
                keyboardType='numeric'
                maxLength={5}
                />
              <View style={currencyConvertor.selectCurrencyView}>
                  <Text style={currencyConvertor.currencyLabel}>INR</Text>
                  <Image style={currencyConvertor.selectCurrencyLogo} source={require('@/assets/images/Transaction/countryIndia.png')} />
                </View>
            </View>

            <SecondaryButton
              title={Constants.SEND}
              onPress={completePayment}
              style={styles.btnContainer}
            />
  
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  export default QRAmount;
  