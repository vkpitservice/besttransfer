import {
    ActivityIndicator,
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import BackTitleHomeComponent from '@/components/BackTitleHome';
import { ColorSheet } from '@/utils/ColorSheet';
import { WebView } from 'react-native-webview';
import { DefaultConstants } from '@/utils/Constants';
import { StackActions } from '@react-navigation/native';
import postRequest from '@/components/NetworkRequest/postRequest';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SumSub = ({ navigation, route }) => {
    const { sumsuburl } = route.params;
    const [interval, setinterval] = useState(false);
    const getUserDetails = async () => {
        const login_mobile = await AsyncStorage.getItem('login_external_id');
        const response = await postRequest(DefaultConstants.FX_BASE_URL + 'API-FX-188-SUMSUB-DETAILS', {
            "user_id": login_mobile
        }, {
            headers: {
                fx_key: DefaultConstants.FX_SUBSCRIPTION_KEY
            }
        });
        if (response[0] == 200) {
            console.log("succccccc");
            setinterval(true);
            (response[1].data).hasOwnProperty('firstName') && Alert.alert("Success",'KYC Submitted Successfully. Please wait while we review your details.')
            //  :
            
            //     Alert.alert("Error",(response[1].data.msg).toUpperCase())
            (response[1].data).hasOwnProperty('firstName') && navigation.dispatch(StackActions.replace('AppBottomTab'));
        }
        else {
            setinterval(true);
            console.log("errrrrrrrr" + response[1]);
        }
    }
    useEffect(() => {
        getUserDetails()
    }, [interval])
    return (
        <View
            style={{ flex: 1 }}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
            {/* StatusBar */}
            <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent={true} />

            {/* ScrollView */}
            <ScrollView
                contentContainerStyle={[styles.scroll_container, { flex: 1 }]}
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
                {/* Back And Header And Home */}
                <BackTitleHomeComponent
                    style={[styles.titleHeaderContainer, { marginBottom: 40 }]}
                    title={''}
                    onPressBack={() => {
                        navigation.dispatch(StackActions.replace('AppBottomTab'));
                    }}
                    onPressHome={() => {
                        navigation.dispatch(StackActions.replace('AppBottomTab'));
                    }}
                />


                {sumsuburl ?
                    <WebView scalesPageToFit
                        geolocationEnabled={true}
                        mediaPlaybackRequiresUserAction={false}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        startInLoadingState={true}
                        originWhitelist={["*"]} source={{ uri: sumsuburl }} style={{ flex: 1, width: "100%", height: "100%" }} onNavigationStateChange={(resp) => {
                            console.log(resp.url);
                        }} />
                    :
                    <ActivityIndicator size={'small'} color={ColorSheet.PrimaryButton} />
                }


            </ScrollView>
        </View>
    );
};

export default SumSub;