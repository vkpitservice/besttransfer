import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Constants } from './constants';
import BackTitleHomeComponent from '@/components/BackTitleHome';
import { ColorSheet } from '@/utils/ColorSheet';
import { Fontisto } from '@expo/vector-icons';
import PrimaryButton from '@/components/buttons/primaryButton';
import axios from 'axios';
import { DefaultConstants } from '@/utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import postRequest from '@/components/NetworkRequest/postRequest';
import { ErrorFlash } from '@/utils/flashMessage';
import DeviceInfo from 'react-native-device-info';
import { StackActions } from '@react-navigation/native';

const PaymentTypes = ({ navigation, route }) => {
    const { beneId, name, accno, ifsc, totalAmount, enteredamount, fromCurrency, toCurrency, fees, reference, reason,reasonLabel, exchangeRate } = route.params;
    const [selectedOption, setSelectedOption] = useState('manual_transfer')
    const [loading, setLoading] = useState(false)
    const proceedToPay = async () => {
        if (selectedOption == 'bank_transfer') {
            setLoading(true)
            const loginresp = await postRequest(DefaultConstants.FX_BASE_URL + "API-FX-197-STAFF_Login", {
                "email": DefaultConstants.FX_TOKEN_USERNAME,
                "password": DefaultConstants.FX_TOKEN_PASSWORD
            }, {
                headers: {
                    fx_key: DefaultConstants.FX_SUBSCRIPTION_KEY
                }
            });
            // console.log({
            //     "sortCode": "123456",
            //     "accountNo": "78945623",
            //     "amount": enteredamount,
            //     "user_id": await AsyncStorage.getItem('reg_id'),
            //     "ip": await DeviceInfo.getIpAddress()=='' || await DeviceInfo.getIpAddress()==null || await DeviceInfo.getIpAddress()=='unknown' ? '43.241.122.25' : await DeviceInfo.getIpAddress()
            // });
            
           const voltlink =  await postRequest(DefaultConstants.FX_BASE_URL + "API-FX-184-GENERATE-VOLT-CHECKOUT-LINK",
                {
                    "sortCode": "123456",
                    "accountNo": "78945623",
                    "amount": enteredamount,
                    "user_id": await AsyncStorage.getItem('reg_id'),
                    "ip": "43.241.122.25"
                }, {
                headers: {
                    fx_key: DefaultConstants.FX_SUBSCRIPTION_KEY,
                    Authorization: "Bearer " + loginresp[1].data.token
                }
            });
            console.log("hellooo",voltlink[1].data);
            
            if(voltlink[0]!='400')
            {
                setLoading(false)
                navigation.navigate('VoltHtmlWebsiteView',{volturl:JSON.parse(voltlink[1].data.volt).checkoutUrl,voltid:JSON.parse(voltlink[1].data.volt).id, beneId: beneId, name: name, accno: accno, ifsc: ifsc, totalAmount: totalAmount, enteredamount: enteredamount, fromCurrency: fromCurrency, toCurrency: toCurrency, fees: fees, reference: reference, reason: reason,reasonLabel:reasonLabel, exchangeRate: exchangeRate});
            }
            else{
                ErrorFlash(voltlink[1])
                setLoading(false)
            }
        }
        else
            if (selectedOption == 'manual_transfer') {
                navigation.navigate('BankDetails', { beneId: beneId, name: name, accno: accno, ifsc: ifsc, totalAmount: totalAmount, enteredamount: enteredamount, fromCurrency: fromCurrency, toCurrency: toCurrency, fees: fees, reference: reference, reason: reason,reasonLabel:reasonLabel, exchangeRate: exchangeRate })
            }
    }
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
            {/* StatusBar */}
            <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent={true} />

            {/* ScrollView */}
            <ScrollView
                contentContainerStyle={[styles.scroll_container, { flex: 0.8 }]}
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
                {/* Back And Header And Home */}
                <BackTitleHomeComponent
                    style={styles.titleHeaderContainer}
                    title={Constants.PAYMENT_METHOD}
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

                <View style={styles.main_Container}>
                    {/* <TouchableOpacity onPress={() => setSelectedOption('bank_transfer')} style={styles.payment_type_block}>
                        <Text style={{ fontSize: 20 }}>Bank Transfer (Free)</Text>
                        {selectedOption == 'bank_transfer' ?
                            <Fontisto name='radio-btn-active' size={30} />
                            :
                            <Fontisto name='radio-btn-passive' size={30} />
                        }
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => setSelectedOption('manual_transfer')} style={styles.payment_type_block}>
                        <Text style={{ fontSize: 20 }}>Manual Transfer (Free)</Text>
                        {selectedOption == 'manual_transfer' ?
                            <Fontisto name='radio-btn-active' size={30} />
                            :
                            <Fontisto name='radio-btn-passive' size={30} />
                        }
                    </TouchableOpacity>
                </View>

                <PrimaryButton
                    style={[styles.btnContainer, { position: 'absolute', bottom: 0, width: '100%' }]}
                    title={Constants.BTN_NAME}
                    onPress={proceedToPay}
                    loading={loading}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default PaymentTypes;