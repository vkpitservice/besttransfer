import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ColorSheet } from '@/utils/ColorSheet';
import { styles } from './styles';
import OTPInput from '@/components/input/OTPInput';
import { Constants } from './constants';
import PrimaryButton from '@/components/buttons/primaryButton';
import { useUpdateEffect } from '@/utils/useUpdateEffect';
import { ErrorFlash } from '@/utils/flashMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextInputField from '@/components/input/TextInput';
import postRequest from '@/components/NetworkRequest/postRequest';
import { DefaultConstants } from '@/utils/Constants';
import patchRequest from '@/components/NetworkRequest/patchRequest';
import { StackActions } from '@react-navigation/native';
import getRequest from '@/components/NetworkRequest/getRequest';
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const BeneficiaryOtpVerification = ({ navigation, route }) => {
    const { firstname, lastname, accountname, ifsc, city, accountnumber, beneType,mobile } = route.params;
    const [isResendSuccessVisible, setResendSuccessVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [mobileNumber, setMobileNumber] = useState("");
    const [otp, setOtp] = useState();

    useUpdateEffect(() => {
        if (isResendSuccessVisible) {
            setTimeout(() => {
                setResendSuccessVisible(false);
            }, 3000);
        }
    }, [isResendSuccessVisible]);

    const onPressSubmit = async () => {
        if (otp?.length !== 6) {
            ErrorFlash(Constants.ENTER_VALID_OTP);
        } else {
            setLoading(true)
            let token = await AsyncStorage.getItem('login_token');
            var otpvalidateresp = await getRequest(DefaultConstants.BASE_URL + 'otp/validate-otp/' + otp, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            if (otpvalidateresp[0] == 200) {
                if (beneType == 'account') {
                    var beneresp = await postRequest(DefaultConstants.BASE_URL + 'benificiary/add/account', {
                        country: "India",
                        first_name: firstname,
                        city: city,
                        nickname: lastname,
                        mobile: "",
                        account_name: accountname,
                        ifsc: ifsc,
                        account_number: accountnumber,
                        account_type: "saving",
                        benificiary_type: "account"
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + token
                        }
                    });
                }
                else if (beneType == 'upi') {
                    var beneresp = await postRequest(DefaultConstants.BASE_URL + 'benificiary/add/vpa', {
                        country: "India",
                        first_name: firstname,
                        city: city,
                        nickname: lastname,
                        mobile: mobile,
                        account_name: firstname+" "+lastname,
                        upi_id: accountnumber,
                        benificiary_type: "upi"
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + token
                        }
                    });
                }
                console.log(JSON.stringify(beneresp));
                if (beneresp[0] == 200)
                    navigation.dispatch(StackActions.replace('SearchBeneficiaryScreen'));
                else
                    ErrorFlash(beneresp[1]);
            }
            else {
                ErrorFlash(otpvalidateresp[1])
            }
            setLoading(false)
        }
    };
    const getData = async () => {
        setMobileNumber(await AsyncStorage.getItem('login_mobile'));
    }
    const resendOtp = async () => {
        let token = await AsyncStorage.getItem('login_token');
        var otpresp = await postRequest(DefaultConstants.BASE_URL + 'otp/validate-benificiary', { source: DefaultConstants.SOURCE_NAME }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        if (otpresp[0] == 200)
            setResendSuccessVisible(true);
        else
            ErrorFlash("Error in triggering OTP");
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <StatusBar barStyle='light-content' backgroundColor={ColorSheet.PrimaryButton} translucent />

            <ScrollView
                contentContainerStyle={styles.scroll_container}
                bounces={false}
                showsVerticalScrollIndicator={false}
            >
                <TouchableOpacity style={[styles.backIcon, { position: 'absolute', top: 50, left: 20 }]} onPress={() => navigation.goBack()} activeOpacity={0.8}>
                    <Ionicons
                        name='chevron-back-circle-sharp'
                        size={wp(11)}
                        color={ColorSheet.PrimaryButtonTxt}
                    />
                </TouchableOpacity>
                <Image
                    source={require('@/assets/images/MainBackground.png')}
                    style={styles.backgroundImage}
                />

                <Text style={styles.title}>{Constants.TITLE}</Text>
                <Image source={require('@/assets/images/OTP.png')} style={styles.otp_logo} />
                <Text style={styles.verification}>{Constants.MOBILE_VERIFICATION_TEXT}</Text>
                <Text style={styles.otpText}>{Constants.ENTER_OTP_TEXT}</Text>


                <View style={styles.numberView}>
                    <Text style={styles.numberText}>+44 {mobileNumber}</Text>
                </View>


                <OTPInput
                    mask={true}
                    cellCount={6}
                    style={styles.otpInput}
                    onChangeValue={(otp) => {
                        setOtp(otp);
                    }}
                />

                <View style={[styles.resendView, { marginTop: 4 }]}>
                    <Text style={styles.resendText}>{Constants.DIDNT_RECEIVE_OTP_TEXT}</Text>
                    <TouchableOpacity
                        onPress={resendOtp}
                        style={styles.resendButton}
                    >
                        <Text style={styles.resendButtonText}>{Constants.RESEND_OTP_TEXT}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.resendSuccessView}>
                    {isResendSuccessVisible && (
                        <View style={styles.resendSuccessTextContainer}>
                            <Text style={styles.resendSuccessText}>{Constants.OTP_SUCCESS_TEXT}</Text>
                        </View>
                    )}
                </View>

                <PrimaryButton title='Submit' onPress={onPressSubmit} style={[styles.button, { marginTop: 0 }]} loading={loading} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default BeneficiaryOtpVerification;
