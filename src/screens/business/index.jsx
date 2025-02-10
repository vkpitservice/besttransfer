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
import axios from 'axios';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import getRequest from '@/components/NetworkRequest/getRequest';

const BusinessDetails = ({ navigation }) => {
    const [loading, setloading] = useState(false);
    const [companyloading, setcompanyloading] = useState(false);
    const [enityTypes, setEntityTypes] = useState([]);
    const [companydata, setCompanydata] = useState([]);

    const [formData, setFormData] = useState({
        companyType: '',
        companyTypeError: '',
        companyName: '',
        companyTitle: '',
        companyNameError: '',
        activity: '',
        activityError: '',
        expectedTurnover: '',
        expectedTurnoverError: '',
        companyAddress: '',
        companyNumber: '',
    });

    const onPressSubmit = async () => {
        if (formData.companyType == '') {
            ErrorFlash(Constants.COMPANYTYPE_REQUIRED);
        } else if (formData.companyName == '') {
            ErrorFlash(Constants.COMPANYNAME_REQUIRED);
        }
        else if (formData.companyAddress == '') {
            ErrorFlash(Constants.COMPANYADDRESS_REQUIRED);
        }
        else if (formData.companyNumber == '') {
            ErrorFlash(Constants.COMPANYNUMBER_REQUIRED);
        }
        else {
            setloading(true)
            console.log(JSON.stringify(formData));
            let token = await AsyncStorage.getItem('reg_access_token');
            let reg_email = await AsyncStorage.getItem('reg_email');
            var dropscreen = await postRequest(DefaultConstants.BASE_URL + 'user/screen-data', {
                identifier: reg_email,
                screen_name: "business_details",
                screen_data: { companyType: formData.companyType, companyName: formData.companyName, companyTitle: formData.companyTitle, activity: formData.activity, expectedTurnover: formData.expectedTurnover, companyAddress: formData.companyAddress, companyNumber: formData.companyNumber, next_screen:"AboutBusiness" },
                device_token: "NANANANANANA",
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });


            navigation.navigate('AboutBusiness', { companyType: formData.companyType, companyName: formData.companyName, companyTitle: formData.companyTitle, activity: formData.activity, expectedTurnover: formData.expectedTurnover, companyAddress: formData.companyAddress, companyNumber: formData.companyNumber })
            setloading(false)
        }
    };
    const setAsyncData = async (key, value) => {
        await AsyncStorage.setItem(key, value)
    }

    const loadData = async () => {

        var resp = await getRequest(DefaultConstants.FX_BASE_URL + "API-FX-167-ENTITY-TYPES", {
            headers: {
                fx_key: DefaultConstants.FX_SUBSCRIPTION_KEY,
            }
        });
        if (resp[0] == 200) {
            console.log(resp[1].data.data);
            setEntityTypes(resp[1].data.data);
        }
        else {
            ErrorFlash(resp[1])
        }
    }
    const searchCompany = async () => {
        setcompanyloading(true)
        setCompanydata([])
        const loginresp = await postRequest(DefaultConstants.FX_BASE_URL + "API-FX-197-STAFF_Login", {
            "email": DefaultConstants.FX_TOKEN_USERNAME,
            "password": DefaultConstants.FX_TOKEN_PASSWORD
        }, {
            headers: {
                fx_key: DefaultConstants.FX_SUBSCRIPTION_KEY
            }
        });
        console.log(formData.companyName);

        const resp = await getRequest(DefaultConstants.FX_BASE_URL + "API-FX-168-COMPANY-SEARCH?name=" + formData.companyName, {
            headers: {
                fx_key: DefaultConstants.FX_SUBSCRIPTION_KEY,
                Authorization: 'Bearer ' + loginresp[1].data.token
            }
        });
        setcompanyloading(false)
        if (resp[0] == '200') {
            console.log(JSON.stringify(resp[1].data));
            setCompanydata(resp[1].data.data)
            setcompanyloading(false)
        }
        else {
            ErrorFlash(resp[1])

            setcompanyloading(false)
        }
    }
    useEffect(() => {
        loadData();
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
                    {/* Header Title */}
                    <Text style={styles.titleText}>{Constants.WELCOME_TEXT}</Text>

                    <Text style={styles.subTitleText}>{Constants.LOGIN_TEXT}</Text>

                    <SelectDropdown
                        data={enityTypes}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                            setFormData({ ...formData, companyType: selectedItem.name })
                        }}
                        renderButton={(selectedItem, isOpened) => {
                            return (
                                <View style={styles.dropdownButtonStyle}>
                                    <Text style={styles.dropdownButtonTxtStyle}>
                                        {(selectedItem && selectedItem.name) || Constants.ENTER_COMPANY_TYPE}
                                    </Text>
                                </View>
                            );
                        }}
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                    <Text style={styles.dropdownItemTxtStyle}>{item.name}</Text>
                                </View>
                            );
                        }}
                        showsVerticalScrollIndicator={false}
                        dropdownStyle={styles.dropdownMenuStyle}
                    />
                    <View style={styles.flexContainer}>
                        <TextInputField
                            value={formData.companyName}
                            onChangeText={(text) => setFormData({ ...formData, companyName: text })}
                            style={styles.companyName}
                            placeholder={Constants.ENTER_COMPANY_NAME}
                        />
                        {companyloading ?
                            <PrimaryButton
                                style={styles.searchIcon}
                                title={'...'}
                                loading={loading}
                                onPress={searchCompany}
                            />
                            :
                            <PrimaryButton
                                style={styles.searchIcon}
                                title={<FontAwesome5Icon name='search' size={20} />}
                                loading={loading}
                                onPress={searchCompany}
                            />
                        }
                    </View>
                    {companydata.length > 0 &&
                        <SelectDropdown
                            data={companydata}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem.title);
                                console.log(selectedItem.company_number);
                                setFormData({ ...formData, companyName: selectedItem.company_number, companyTitle: selectedItem.title, companyNumber: selectedItem.company_number, companyAddress: selectedItem.address_snippet })
                            }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    <View style={styles.dropdownButtonStyle}>
                                        <Text style={styles.dropdownButtonTxtStyle}>
                                            {(selectedItem && selectedItem.title) || Constants.SELECT_COMPANY}
                                        </Text>
                                    </View>
                                );
                            }}
                            renderItem={(item, index, isSelected) => {
                                return (
                                    <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                        <Text style={styles.dropdownItemTxtStyle}>{item.title + '-' + item.company_status}</Text>
                                    </View>
                                );
                            }}
                            showsVerticalScrollIndicator={false}
                            dropdownStyle={styles.dropdownMenuStyle}
                        />
                    }
                    <TextInputField
                        value={formData.activity}
                        onChangeText={(text) => setFormData({ ...formData, activity: text })}
                        style={styles.email_Field}
                        placeholder={Constants.ENTER_COMPANY_Activity}
                    />

                    <TextInputField
                        value={formData.expectedTurnover}
                        onChangeText={(text) => setFormData({ ...formData, expectedTurnover: text })}
                        style={styles.email_Field}
                        placeholder={Constants.ENTER_COMPANY_TURNOVER}
                    />


                    {/* Sign Up Button */}
                    <PrimaryButton
                        onPress={onPressSubmit}
                        style={styles.buttonStyle}
                        title={Constants.BUTTON_TEXT}
                        loading={loading}
                    />


                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default BusinessDetails;
