import {
    ActivityIndicator,
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
import PrimaryButton from '@/components/buttons/primaryButton';
import { styles } from './styles';
import { Constants } from './constants';
import { ErrorFlash } from '@/utils/flashMessage';
import postRequest from '@/components/NetworkRequest/postRequest';
import { DefaultConstants } from '@/utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorSheet } from '@/utils/ColorSheet';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import { StackActions } from '@react-navigation/native';

const SelectOfficer = ({ navigation, route }) => {
    const { companyNumber } = route.params;
    const [loading, setloading] = useState(false);
    const [buttonloading, setButtonloading] = useState(false);
    const [data, setData] = useState([]);
    const [selectedOfficer, setselectedOfficer] = useState();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        dob: '',
        doj: '',
        role: '',
        company_sharing: '',
    });
    const onPressSubmit = async () => {
        if (formData.first_name == '') {
            ErrorFlash(Constants.OFFICER_FIRST_NAME);
        } else if (formData.last_name == '') {
            ErrorFlash(Constants.OFFICER_LAST_NAME);
        }
        else if (formData.role == '') {
            ErrorFlash(Constants.OFFICER_DESIGNATION);
        }
        else {
            setButtonloading(true)
            const token = await AsyncStorage.getItem('reg_access_token');
            console.log({
                "first_name": formData.first_name,
                "last_name": formData.last_name,
                "mobile": "7777777777",
                "email": "test@fxamster.com",
                // "dob": "10-"+formData.dob,
                // "date_of_joining":formData.doj,
                "dob": "2024-07-10",
                "date_of_joining": "2024-07-10",
                "role": formData.role,
                "company_sharing": '1',
                "country_code": "+44"
            });

            const resp = await postRequest(DefaultConstants.BASE_URL + 'business/add-owner', {
                "first_name": formData.first_name,
                "last_name": formData.last_name,
                "mobile": "7777778777",
                "email": "test1@fxamster.com",
                "dob": "2020-07-10",
                "date_of_joining": "2020-07-10",
                "role": formData.role,
                "company_sharing": '1',
                "country_code": "+44"
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });

            console.log("helooooooooooooooooo" + JSON.stringify(resp));
            if (resp[0] != 400) {
                setButtonloading(false)
                let reg_email = await AsyncStorage.getItem('reg_email');
                var dropscreen = await postRequest(DefaultConstants.BASE_URL + 'user/screen-data', {
                    identifier: reg_email,
                    screen_name: "select_officer",
                    screen_data: {
                        "first_name": formData.first_name,
                        "last_name": formData.last_name,
                        "mobile": "7777778777",
                        "email": "test1@fxamster.com",
                        "dob": "2020-07-10",
                        "date_of_joining": "2020-07-10",
                        "role": formData.role,
                        "company_sharing": '1',
                        "country_code": "+44",
                        "next_screen":"RegisterSuccessFullScreen"
                    },
                    device_token: "NANANANANANA",
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                });
                navigation.dispatch(StackActions.replace('RegisterSuccessFullScreen'));
            }
            else {
                setButtonloading(false)
                ErrorFlash(resp[1]);
            }

        }
    }

    const loadData = async () => {
        setloading(true)
        const loginresp = await postRequest(DefaultConstants.FX_BASE_URL + "API-FX-197-STAFF_Login", {
            "email": DefaultConstants.FX_TOKEN_USERNAME,
            "password": DefaultConstants.FX_TOKEN_PASSWORD
        }, {
            headers: {
                fx_key: DefaultConstants.FX_SUBSCRIPTION_KEY
            }
        });

        console.log(DefaultConstants.BASE_URL + "API-FX-170-COMPANY-OFFICERS?number=" + companyNumber);
        await axios.get(DefaultConstants.FX_BASE_URL + "API-FX-170-COMPANY-OFFICERS?number=" + companyNumber, {
            headers: {
                fx_key: DefaultConstants.FX_SUBSCRIPTION_KEY,
                Authorization: 'Bearer ' + loginresp[1].data.token
            }
        }).then(resp => {
            console.log(JSON.stringify(resp.data.data));
            setData(resp.data.data);
            setloading(false)
        }).catch(err => {
            console.log(err.response.data);
            setloading(false)
        })

    }
    useEffect(() => {
        loadData()
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
                    <Text style={styles.titleText}>{Constants.SELECT_OFFICER_TEXT}</Text>

                    {loading ?
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size={'large'} color={ColorSheet.PrimaryButton} /></View>
                        :
                        <FlatList
                            data={data}
                            keyExtractor={(x, i) => i.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity onPress={() => {
                                        setselectedOfficer(index)
                                        setFormData({ ...formData, first_name: item.first_name, last_name: item.last_name, role: item.officer_role, dob: 'date_of_birth' in item && item.date_of_birth.month + "-" + item.date_of_birth.year, doj: item.appointed_on })
                                    }} style={selectedOfficer == index ? styles.selectedOfficer : styles.unSelectedOfficer}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, padding: 5 }}>
                                            <Text style={styles.selectedOfficerHeading}>{item.name} - {item.officer_role}</Text>
                                            <Text style={styles.selectedOfficerHeading}>{item.address.locality},{item.address.region},{item.address.address_line_1},{item.address.postal_code}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between' }}>
                                            <View style={styles.leftblock}>
                                                <Text style={styles.selectedOfficerHeading}>Appointed On</Text>
                                                <Text style={[styles.selectedOfficerText, { fontSize: 15 }]}>{item.appointed_on}</Text>
                                            </View>
                                            <View style={styles.rightblock}>
                                                <Text style={styles.selectedOfficerHeading}>Nationality</Text>

                                                <Text style={[styles.selectedOfficerText, { fontSize: 15 }]}>{item.nationality}</Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between' }}>
                                            <View style={styles.leftblock}>
                                                <Text style={styles.selectedOfficerHeading}>Residence Country</Text>

                                                <Text style={[styles.selectedOfficerText, { fontSize: 15 }]}>{item.country_of_residence ? item.country_of_residence : "-"}</Text>
                                            </View>
                                            <View style={styles.rightblock}>
                                                <Text style={styles.selectedOfficerHeading}>Occupation</Text>

                                                <Text style={[styles.selectedOfficerText, { fontSize: 15 }]}>{item.occupation}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                            style={{ width: '90%' }}
                        />
                    }

                    <PrimaryButton
                        onPress={onPressSubmit}
                        style={styles.buttonStyle}
                        title={Constants.BUTTON_TEXT}
                        loading={buttonloading}
                    />


                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default SelectOfficer;
