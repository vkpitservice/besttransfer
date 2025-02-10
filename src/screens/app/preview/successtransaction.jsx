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
import { Constants } from './constants';
import BackTitleHomeComponent from '@/components/BackTitleHome';
import PrimaryButton from '@/components/buttons/primaryButton';
import { ColorSheet } from '@/utils/ColorSheet';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import postRequest from '@/components/NetworkRequest/postRequest';
import { StackActions } from '@react-navigation/native';
import GetLocation from 'react-native-get-location'

const SuccessTransaction = ({ navigation, route }) => {
    const { url, enteredamount, reason,reasonLabel, fees, exchangeRate, fromCurrency, toCurrency,reference } = route.params;
    const [loading, setLoading] = useState(true);
    const [payment, setPayment] = useState(false);
    const ProcessTransaction = async () => {
        console.log(route.params);
        setLoading(true)
        await GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 60000,
        })
        .then(location => {
            console.log(location);
            createTransaction(location.latitude,location.longitude)
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
            setLoading(false)
        })
    }
    const createTransaction = async(latitude,longitude) =>{
        let token = await AsyncStorage.getItem('login_token');
        console.log({
            amount: JSON.parse(enteredamount),
            message: reference,
            code: reason,
            fees: JSON.parse(fees),
            current_rate: JSON.parse(exchangeRate),
            from_currency: fromCurrency,
            to_currency: toCurrency,
            latitude: latitude,
            longitude: longitude,
        });
        const resp = await postRequest(url, {
            amount: JSON.parse(enteredamount),
            message: reference,
            code: reason,
            fees: JSON.parse(fees),
            current_rate: JSON.parse(exchangeRate),
            from_currency: fromCurrency,
            to_currency: toCurrency,
            latitude: latitude,
	        longitude: longitude,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        console.log(JSON.stringify(resp));
        if (resp[0] != '400') {
            setLoading(false);
            setPayment(true);
            await AsyncStorage.removeItem('totalAmount');
            await AsyncStorage.removeItem('amount');
            await AsyncStorage.removeItem('fromCurrency');
            await AsyncStorage.removeItem('toCurrency');
            await AsyncStorage.removeItem('fees');
            await AsyncStorage.removeItem('exchangeRate');
        }
        else {
            setLoading(false);
            setPayment(false);
        }
    }
    useEffect(() => {
        ProcessTransaction()
    }, [])
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
                    title={Constants.BANK_DETAILS}
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

                <View style={[styles.main_Container, { justifyContent: 'center', alignItems: 'center' }]}>

                    {!loading ?
                        payment ?
                            <>
                                <View
                                    style={styles.successTick}>
                                    <Image
                                        source={require('@/assets/images/successtick.png')}
                                        style={{ width: (180), height: (180) }}
                                    />
                                </View>

                                <Text style={styles.paymentProcessingText}>Processing the payment</Text>

                            </>
                            :
                            <>
                                <View
                                    style={styles.successTick}>
                                    <Image
                                        source={require('@/assets/images/closeimage.jpg')}
                                        style={{ width: (180), height: (180) }}
                                    />
                                </View>

                                <Text style={styles.paymentProcessingText}>Payment Failed</Text>

                            </>
                        :
                        <>
                            <Image
                                source={require('@/assets/images/loading-gif.gif')}
                                style={{ width: (180), height: (180) }}
                            />
                        </>
                    }
                </View>

                <PrimaryButton
                    style={[styles.btnContainer, { position: 'absolute', bottom: 0, width: '100%' }]}
                    title={Constants.BACK_TO_DASHBOARD}
                    onPress={() => navigation.dispatch(StackActions.replace('AppBottomTab'))}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default SuccessTransaction;