import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Constants } from './constants';
import BackTitleHomeComponent from '@/components/BackTitleHome';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '@/components/buttons/primaryButton';
import Clipboard from '@react-native-clipboard/clipboard';
import { ErrorFlash, SuccessFlash } from '@/utils/flashMessage';
import postRequest from '@/components/NetworkRequest/postRequest';
import { DefaultConstants } from '@/utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';


const BankDetails = ({ navigation, route }) => {
    const { beneId, name, accno, ifsc, totalAmount, enteredamount, fromCurrency, toCurrency, fees, reference, reason, exchangeRate } = route.params;
    const [loading, setLoading] = useState(false)
    const proceedToPay = async () => {
        if (ifsc == '' || ifsc == null) { 
            navigation.navigate('SuccessTransaction',{url:DefaultConstants.BASE_URL + 'transaction/upi/' + beneId,enteredamount:enteredamount,reason:reason,fees:fees,exchangeRate:exchangeRate,fromCurrency:fromCurrency,toCurrency:toCurrency})
            
        }
        else
        {
            navigation.navigate('SuccessTransaction',{url:DefaultConstants.BASE_URL + 'transaction/manual/' + beneId,enteredamount:enteredamount,reason:reason,fees:fees,exchangeRate:exchangeRate,fromCurrency:fromCurrency,toCurrency:toCurrency})
        }
        
    }
    const copyToClipboard = (val) => {
        Clipboard.setString(val);
        SuccessFlash(val + ' Copied')
    };
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
                    onPressBack={() => {
                        navigation.goBack();
                    }}
                    onPressHome={() => {
                        console.log('onPressHome');
                    }}
                />

                {/* Image */}
                <Image
                    style={styles.imageBackground}
                    source={require('@/assets/images/beneficiary/SelectBeneficiary.png')}
                />

                <View style={[styles.main_Container, { justifyContent: 'center', alignItems: 'center' }]}>
                    <View>
                        <Text style={styles.subTitleText}>{Constants.BANK_DETAILS_TEXT1} {enteredamount} {Constants.BANK_DETAILS_TEXT2}</Text>

                        <Text style={styles.subTitleText}>{Constants.BANK_DETAILS_TEXT3}</Text>
                    </View>

                    <View style={styles.detailsBlock}>
                        <View style={{}}>
                            <Text>
                                To
                            </Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                Best Transfer
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => copyToClipboard('To: Best Transfer')}>
                            <Ionicons name='copy-outline' size={30} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.detailsBlock}>
                        <View style={{}}>
                            <Text>
                                Sort Code
                            </Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                609242
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => copyToClipboard('Sort Code: 609242')}>
                            <Ionicons name='copy-outline' size={30} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.detailsBlock}>
                        <View style={{}}>
                            <Text>
                                Account Number
                            </Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                26225774234
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => copyToClipboard('Account Number: 26225774234')}>
                            <Ionicons name='copy-outline' size={30} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.detailsBlock}>
                        <View style={{}}>
                            <Text>
                                Bank
                            </Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                FX Master
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => copyToClipboard('Bank: FX Master')}>
                            <Ionicons name='copy-outline' size={30} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.detailsBlock}>
                        <View style={{}}>
                            <Text>
                                Currency
                            </Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                GBP
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => copyToClipboard('Currency: GBP')}>
                            <Ionicons name='copy-outline' size={30} />
                        </TouchableOpacity>
                    </View>
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

export default BankDetails;