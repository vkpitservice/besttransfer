import {
    Image,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import BackTitleAddComponent from '@/components/BackTitleAdd';
import { Constants } from './constants';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


const QRScan = ({ navigation }) => {
    const [upi, setUpi] = useState();
    useEffect(() => {
        navigateToPage()
    }, [upi])

    const onSuccess = e => {
        setUpi(e.data);
      };
    const navigateToPage = async() =>{
        if(upi!="" && upi!=null)
        {
            navigation.navigate('QRAmount',{upi:upi})
        }
    }
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
            {/* Status Bar */}
            <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent={true} />

            {/* Image */}
            <Image
                style={styles.backgroundImage}
                source={require('@/assets/images/Transaction/TransferDashboard.png')}
            />

            {/* Back Header Title Add */}
            <BackTitleAddComponent
                title={Constants.HEADER_TITLE}
                onPressBack={() => {
                    navigation.goBack();
                }}
            />

            {/* List Of Data */}
            <View style={styles.mainContainer}>
                <QRCodeScanner
                    onRead={onSuccess}
                    // flashMode={RNCamera.Constants.FlashMode.torch}
                    reactivate={true}
                    cameraStyle={{width:widthPercentageToDP(100),height:heightPercentageToDP(80)}}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

export default QRScan;

const listData = [
    {
        id: 1,
        image: require('@/assets/images/Transaction/TransactionProfile.png'),
        name: 'Yara Khalil',
        date: 'Oct 14, 10:24 AM',
        amount: '£15.00',
        type: 'success',
    }
];
