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
import React from 'react';
import { styles } from './styles';
import { Constants } from './constants';
import BackTitleHomeComponent from '@/components/BackTitleHome';
import { ColorSheet } from '@/utils/ColorSheet';
import { WebView } from 'react-native-webview';
import { DefaultConstants } from '@/utils/Constants';
import { StackActions } from '@react-navigation/native';

const VoltHtmlWebsiteView = ({ navigation, route }) => {
    const { volturl, voltid, beneId, name, accno, ifsc, totalAmount, enteredamount, fromCurrency, toCurrency, fees, reference, reason,reasonLabel, exchangeRate } = route.params;
    
    return (
        <View
            style={{flex:1}}
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
                    style={[styles.titleHeaderContainer,{marginBottom:40}]}
                    title={''}
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

               

                    {volturl ?
                        <WebView scalesPageToFit
                            geolocationEnabled={true}
                            mediaPlaybackRequiresUserAction={false}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            startInLoadingState={true}
                            originWhitelist={["*"]} source={{ uri: volturl }} style={{ flex: 1, width: "100%", height: "100%" }} onNavigationStateChange={(resp) => {
                                console.log(resp.url);
                                if (resp.url.includes("voltsuccess") ) {
                                    if(totalAmount>200000)
                                    {
                                        navigation.dispatch(StackActions.replace('SuccessTransaction',{url:DefaultConstants.BASE_URL + 'transaction/imps/' + beneId,enteredamount:enteredamount,reason:reason,reasonLabel:reasonLabel,fees:fees,exchangeRate:exchangeRate,fromCurrency:fromCurrency,toCurrency:toCurrency}))
                                    }
                                    else
                                    {
                                        navigation.dispatch(StackActions.replace('SuccessTransaction',{url:DefaultConstants.BASE_URL + 'transaction/rtgs/' + beneId,enteredamount:enteredamount,reason:reason,reasonLabel:reasonLabel,fees:fees,exchangeRate:exchangeRate,fromCurrency:fromCurrency,toCurrency:toCurrency}))
                                    }
                                }
                                if(resp.url.includes("voltfailure")){
                                    Alert.alert('Payment Failed');
                                    navigation.dispatch(StackActions.replace('AppBottomTab'))
                                }
                            }} />
                        :
                        <ActivityIndicator size={'small'} color={ColorSheet.PrimaryButton} />
                    }

                
            </ScrollView>
        </View>
    );
};

export default VoltHtmlWebsiteView;