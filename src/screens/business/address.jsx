import {
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import BestTransFer from '@/assets/svg/CreateAcc/Best_TransFer.svg';
import TextInputField from '@/components/input/TextInput';
import PrimaryButton from '@/components/buttons/primaryButton';
import { styles } from './styles';
import { Constants } from './constants';
import SelectDropdown from 'react-native-select-dropdown';
import { ErrorFlash } from '@/utils/flashMessage';
import postRequest from '@/components/NetworkRequest/postRequest';
import { DefaultConstants } from '@/utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorSheet } from '@/utils/ColorSheet';
import Fontisto from 'react-native-vector-icons/Fontisto';
import patchRequest from '@/components/NetworkRequest/patchRequest';

const BusinessAddress = ({ navigation, route }) => {
    const { companyType, companyName, companyTitle, activity, expectedTurnover, companyAddress, companyNumber, website, companyEmail, companyPhone, about } = route.params;
    const [formData, setFormData] = useState({
        privateAddress: '',
        shippingAddress: '',
        invoiceAddress: '',
        correspondenceAddress: '',
    });
    const onPressSubmit = async () => {
        if (formData.privateAddress == '') {
            ErrorFlash(Constants.ENTER_PRIVATE_ADDRESS);
        } else if (formData.shippingAddress == '') {
            ErrorFlash(Constants.ENTER_SHIPPING_ADDRESS);
        }
        else if (formData.invoiceAddress == '') {
            ErrorFlash(Constants.ENTER_INVOICE_ADDRESS);
        }
        else if (formData.correspondenceAddress == '') {
            ErrorFlash(Constants.ENTER_CORRESPONDENCE_ADDRESS);
        }
        else {
            const token = await AsyncStorage.getItem('reg_access_token');
            console.log(DefaultConstants.BASE_URL + 'business/add');
            console.log({
                "company_type": companyType,
                "name": companyTitle,
                "description": activity,
                "turnover": expectedTurnover,
                "website": website,
                "email": companyEmail,
                "contact_address": companyAddress,
                "private_address": formData.privateAddress,
                "shipping_address": formData.shippingAddress,
                "invoice_address": formData.invoiceAddress,
                "correspondance_address": formData.correspondenceAddress,
                "company_phone": companyPhone,
                "about_business": about
            });
            console.log({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });

            const resp = await postRequest(DefaultConstants.BASE_URL + 'business/add', {
                "company_type": companyType,
                "company_number": companyNumber,
                "name": companyTitle,
                "description": activity + activity + activity + activity + activity,
                "turnover": expectedTurnover,
                "website": website,
                "email": companyEmail,
                "company_phone": companyPhone,
                "about_business": about + about + about + about + about + about
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            console.log(JSON.stringify(resp));
            if (resp[0] != 400) {
                await patchRequest(DefaultConstants.BASE_URL + 'business/update-business', {
                    "contact_address": companyAddress,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                });

                await patchRequest(DefaultConstants.BASE_URL + 'business/update-business', {
                    "private_address": formData.privateAddress,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                });

                await patchRequest(DefaultConstants.BASE_URL + 'business/update-business', {
                    "shipping_address": formData.shippingAddress,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                });

                await patchRequest(DefaultConstants.BASE_URL + 'business/update-business', {
                    "invoice_address": formData.invoiceAddress,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                });

                await patchRequest(DefaultConstants.BASE_URL + 'business/update-business', {
                    "correspondance_address": formData.correspondenceAddress,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                });

                let reg_email = await AsyncStorage.getItem('reg_email');
                var dropscreen = await postRequest(DefaultConstants.BASE_URL + 'user/screen-data', {
                    identifier: reg_email,
                    screen_name: "business_address",
                    screen_data: {
                        "company_type": companyType,
                        "company_number": companyNumber,
                        "name": companyTitle,
                        "description": activity + activity + activity + activity + activity,
                        "turnover": expectedTurnover,
                        "website": website,
                        "email": companyEmail,
                        "company_phone": companyPhone,
                        "about_business": about + about + about + about + about + about,
                        "contact_address": companyAddress,
                        "private_address": formData.privateAddress,
                        "shipping_address": formData.shippingAddress,
                        "invoice_address": formData.invoiceAddress,
                        "correspondance_address": formData.correspondenceAddress,
                        "next_screen": "SelectOfficer"
                    },
                    device_token: "NANANANANANA",
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                });

                navigation.navigate('SelectOfficer', { companyNumber: companyNumber })
            }
            else {
                ErrorFlash(resp[1])
                // navigation.navigate('SelectOfficer',{companyNumber:companyNumber})
            }
        }
    }
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
                <Image
                    source={require('@/assets/images/CreateAccountBG/Create_an_account.png')}
                    style={styles.backgroundImage}
                />

                {/* Logo */}
                <View style={styles.logo_container}>
                    <BestTransFer width={100} height={100} />
                </View>

                {/* Main Container */}
                <View style={styles.main_container}>
                    <View style={{ alignItems: 'flex-start', }}>
                        <Text>Contact Address</Text>
                        <TextInputField
                            value={companyAddress}
                            style={styles.email_Field}
                            editable={false}
                            secureTextEntry={false}
                        />
                    </View>

                    <View style={{ alignItems: 'flex-start', marginTop: 30 }}>
                        <Text>Private Address</Text>
                        <TextInputField
                            value={formData.privateAddress}
                            onChangeText={(text) => setFormData({ ...formData, privateAddress: text })}
                            style={styles.email_Field}
                            placeholder={Constants.ENTER_PRIVATE_ADDRESS}
                        />
                        {formData.privateAddress == '' ?
                            <Pressable onPress={() => { setFormData({ ...formData, privateAddress: companyAddress }) }}><Text><Fontisto name='radio-btn-passive' size={20} /> Same as contact address</Text></Pressable>
                            :
                            <Pressable onPress={() => { setFormData({ ...formData, privateAddress: "" }) }}><Text><Fontisto name='radio-btn-active' size={20} /> Same as contact address</Text></Pressable>
                        }
                    </View>

                    <View style={{ alignItems: 'flex-start', marginTop: 30 }}>
                        <Text>Shipping Address</Text>
                        <TextInputField
                            value={formData.shippingAddress}
                            onChangeText={(text) => setFormData({ ...formData, shippingAddress: text })}
                            style={styles.email_Field}
                            placeholder={Constants.ENTER_SHIPPING_ADDRESS}
                        />
                        {formData.shippingAddress == '' ?
                            <Pressable onPress={() => { setFormData({ ...formData, shippingAddress: companyAddress }) }}><Text><Fontisto name='radio-btn-passive' size={20} /> Same as contact address</Text></Pressable>
                            :
                            <Pressable onPress={() => { setFormData({ ...formData, shippingAddress: "" }) }}><Text><Fontisto name='radio-btn-active' size={20} /> Same as contact address</Text></Pressable>
                        }
                    </View>

                    <View style={{ alignItems: 'flex-start', marginTop: 30 }}>
                        <Text>Invoice Address</Text>
                        <TextInputField
                            value={formData.invoiceAddress}
                            onChangeText={(text) => setFormData({ ...formData, invoiceAddress: text })}
                            style={styles.email_Field}
                            placeholder={Constants.ENTER_INVOICE_ADDRESS}
                        />
                        {formData.invoiceAddress == '' ?
                            <Pressable onPress={() => { setFormData({ ...formData, invoiceAddress: companyAddress }) }}><Text><Fontisto name='radio-btn-passive' size={20} /> Same as contact address</Text></Pressable>
                            :
                            <Pressable onPress={() => { setFormData({ ...formData, invoiceAddress: "" }) }}><Text><Fontisto name='radio-btn-active' size={20} /> Same as contact address</Text></Pressable>
                        }
                    </View>

                    <View style={{ alignItems: 'flex-start', marginTop: 30 }}>
                        <Text>Correspondence Address</Text>

                        <TextInputField
                            value={formData.correspondenceAddress}
                            onChangeText={(text) => setFormData({ ...formData, correspondenceAddress: text })}
                            style={styles.email_Field}
                            placeholder={Constants.ENTER_CORRESPONDENCE_ADDRESS}
                        />
                        {formData.correspondenceAddress == '' ?
                            <Pressable onPress={() => { setFormData({ ...formData, correspondenceAddress: companyAddress }) }}><Text><Fontisto name='radio-btn-passive' size={20} /> Same as contact address</Text></Pressable>
                            :
                            <Pressable onPress={() => { setFormData({ ...formData, correspondenceAddress: "" }) }}><Text><Fontisto name='radio-btn-active' size={20} /> Same as contact address</Text></Pressable>
                        }
                    </View>


                    {/* Sign Up Button */}
                    <PrimaryButton
                        onPress={onPressSubmit}
                        style={styles.buttonStyle}
                        title={Constants.BUTTON_TEXT}
                    // loading={loading}
                    />


                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default BusinessAddress;
