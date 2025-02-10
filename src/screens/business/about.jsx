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

const AboutBusiness = ({ navigation, route }) => {
    const { companyType, companyName, companyTitle, activity, expectedTurnover, companyAddress, companyNumber } = route.params;
    const [formData, setFormData] = useState({
        website: '',
        companyEmail: '',
        companyPhone: '',
        about: '',
    });
    const onPressSubmit = async() =>{
        if (formData.website == '') {
            ErrorFlash(Constants.ENTER_COMPANY_Website);
        } else if (formData.companyEmail == '') {
            ErrorFlash(Constants.ENTER_COMPANY_EMAIL);
        }
        else if (formData.companyPhone == '') {
            ErrorFlash(Constants.ENTER_COMPANY_PHONE);
        }
        else if (formData.about == '') {
            ErrorFlash(Constants.ENTER_COMPANY_DeSCRIPTION);
        }
        else
        {
            let token = await AsyncStorage.getItem('reg_access_token');
            let reg_email = await AsyncStorage.getItem('reg_email');
            var dropscreen = await postRequest(DefaultConstants.BASE_URL + 'user/screen-data', {
                identifier: reg_email,
                screen_name: "about_business",
                screen_data: {companyType:companyType, companyName:companyName, companyTitle:companyTitle, activity:activity, expectedTurnover:expectedTurnover, companyAddress:companyAddress, companyNumber:companyNumber, website:formData.website,companyEmail:formData.companyEmail,companyPhone:formData.companyPhone,about:formData.about,next_screen:"BusinessAddress"},
                device_token: "NANANANANANA",
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });

            navigation.navigate('BusinessAddress',{companyType:companyType, companyName:companyName, companyTitle:companyTitle, activity:activity, expectedTurnover:expectedTurnover, companyAddress:companyAddress, companyNumber:companyNumber, website:formData.website,companyEmail:formData.companyEmail,companyPhone:formData.companyPhone,about:formData.about})
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
                    {/* Header Title */}
                    <Text style={styles.titleText}>{Constants.ABOUT_BUSINESS_TEXT}</Text>
                    <TextInputField
                        value={formData.website}
                        onChangeText={(text) => setFormData({ ...formData, website: text })}
                        style={styles.email_Field}
                        placeholder={Constants.ENTER_COMPANY_Website}
                    />

                    <TextInputField
                        value={formData.companyEmail}
                        onChangeText={(text) => setFormData({ ...formData, companyEmail: text })}
                        style={styles.email_Field}
                        placeholder={Constants.ENTER_COMPANY_EMAIL}
                    />

                    <TextInputField
                        value={formData.companyPhone}
                        onChangeText={(text) => setFormData({ ...formData, companyPhone: text })}
                        style={styles.email_Field}
                        placeholder={Constants.ENTER_COMPANY_PHONE}
                    />

                    <TextInputField
                        value={formData.about}
                        onChangeText={(text) => setFormData({ ...formData, about: text })}
                        style={styles.email_Field}
                        placeholder={Constants.ENTER_COMPANY_DeSCRIPTION}
                    />


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

export default AboutBusiness;
