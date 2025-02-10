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
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Constants } from './constants';
import BackTitleHomeComponent from '@/components/BackTitleHome';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '@/components/buttons/primaryButton';
import Clipboard from '@react-native-clipboard/clipboard';
import { ErrorFlash, SuccessFlash } from '@/utils/flashMessage';
import { DefaultConstants } from '@/utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getRequest from '@/components/NetworkRequest/getRequest';
import { StackActions } from '@react-navigation/native';


const WalletBankDetails = ({ navigation, route }) => {
    const { totalAmount, enteredamount, fromCurrency, toCurrency, fees, exchangeRate } = route.params;
    const [loading, setLoading] = useState(false)
    const [accountName, setaccountName] = useState("")
    const [sortCode, setsortCode] = useState("")
    const [accountNumber, setaccountNumber] = useState("")
    const [refno, setRefno] = useState("")
    const proceedToPay = async () => {
        navigation.navigate('WalletSuccessTransaction', { url: DefaultConstants.BASE_URL + 'transaction/add-balance', enteredamount: enteredamount, fees: fees, exchangeRate: exchangeRate, fromCurrency: fromCurrency, toCurrency: toCurrency, totalAmount: totalAmount })
    }
    const copyToClipboard = (val) => {
        Clipboard.setString(val);
        SuccessFlash(val + ' Copied')
    };
    const getData = async () => {
        setLoading(true)
        let token = await AsyncStorage.getItem('login_token');
        let user_reference_id = await AsyncStorage.getItem('user_reference_id');
        const response = await getRequest(DefaultConstants.BASE_URL + "transaction/bank/account-details", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        if (response[0] == 200) {
            setLoading(false)
            setaccountName(response[1].data.account_name)
            setsortCode(response[1].data.sort_code)
            setaccountNumber(response[1].data.account_number)
            setRefno(user_reference_id)
        }
        else {
            setLoading(false)
            ErrorFlash(response[1])
        }
    }
    useEffect(() => {
        getData();
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
                    onPressBack={() => {
                        navigation.goBack()
                    }}
                    onPressHome={() => {
                        navigation.dispatch(StackActions.replace('AppBottomTab'))
                    }}
                />

                {/* Image */}
                <Image
                    style={styles.imageBackground}
                    source={require('@/assets/images/beneficiary/SelectBeneficiary.png')}
                />
                {!loading &&
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
                                    {accountName}
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => copyToClipboard('To: ' + accountName)}>
                                <Ionicons name='copy-outline' size={30} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.detailsBlock}>
                            <View style={{}}>
                                <Text>
                                    Sort Code
                                </Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                    {sortCode}
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => copyToClipboard('Sort Code: ' + sortCode)}>
                                <Ionicons name='copy-outline' size={30} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.detailsBlock}>
                            <View style={{}}>
                                <Text>
                                    Account Number
                                </Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                    {accountNumber}
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => copyToClipboard('Account Number: ' + accountNumber)}>
                                <Ionicons name='copy-outline' size={30} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.detailsBlock}>
                            <View style={{}}>
                                <Text>
                                    Reference No
                                </Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                    {refno}
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => copyToClipboard('Reference No: ' + refno)}>
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
                }
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

export default WalletBankDetails;