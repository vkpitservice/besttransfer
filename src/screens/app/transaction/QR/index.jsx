import {
    ActivityIndicator,
    FlatList,
    Image,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import BackTitleAddComponent from '@/components/BackTitleAdd';
import { Constants } from './constants';
import TransactionListShowData from '@/components/transaction/transactionListShowData';
import getRequest from '@/components/NetworkRequest/getRequest';
import { DefaultConstants } from '@/utils/Constants';
import { ErrorFlash } from '@/utils/flashMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


const QRScan = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true); // Check if there are more items to load


    useEffect(() => {

    }, [])

    const onSuccess = e => {
        console.log(e.data);
      };
    
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
                    flashMode={RNCamera.Constants.FlashMode.torch}
                    topContent={
                        <Text style={styles.centerText}>
                            Go to{' '}
                            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                            your computer and scan the QR code.
                        </Text>
                    }
                    bottomContent={
                        <TouchableOpacity style={styles.buttonTouchable}>
                            <Text style={styles.buttonText}>OK. Got it!</Text>
                        </TouchableOpacity>
                    }
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
