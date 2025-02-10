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

const QRTransactionStatus = ({ navigation, route }) => {
    const { status } = route.params;
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

                <View style={[styles.main_Container, { justifyContent: 'center', alignItems: 'center' }]}>

                    {
                        status == 'success' ?
                            <>
                                <View
                                    style={styles.successTick}>
                                    <Image
                                        source={require('@/assets/images/successtick.png')}
                                        style={{ width: (180), height: (180) }}
                                    />
                                </View>

                                <Text style={styles.paymentProcessingText}>Payment Successfull</Text>

                            </>
                            :
                            status == 'failed' ?
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
                                    <View
                                        style={styles.successTick}>
                                        <Image
                                            source={require('@/assets/images/pending.png')}
                                            style={{ width: (180), height: (180) }}
                                        />
                                    </View>

                                    <Text style={styles.paymentProcessingText}>Payment Pending</Text>

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

export default QRTransactionStatus;