import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { ColorSheet } from '@/utils/ColorSheet';
import { styles } from './styles';
import { Constants } from './constants';
import AntDesign from '@expo/vector-icons/AntDesign';
import BackTitleHomeComponent from '@/components/BackTitleHome';
import User from '@/assets/svg/transaction/user.svg';
import DataBox from '@/components/DataBox';
import MainCurveBox from '@/assets/svg/transaction/TransactionDetailsMain.svg';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const TransactionDetails = ({ navigation }) => {
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
      <BackTitleHomeComponent
        title={Constants.HEADER_TITLE}
        onPressBack={() => {
          navigation.goBack();
        }}
        onPressHome={() => {
          console.log('home');
        }}
      />

      <View style={styles.mainScreenContainer}>
        {/* Scroll View */}
        <ScrollView
          contentContainerStyle={styles.scroll_container}
          // bounces={false}
          showsVerticalScrollIndicator={false}
        >
          {/* Success Icon */}
          <View style={styles.roundIconContainer}>
            <AntDesign name='checkcircle' size={22} color={ColorSheet.PrimaryButtonTxt} />
          </View>

          {/* Main Curve  */}
          <MainCurveBox width={wp(120)} style={styles.imageMain} />

          {/* Title */}
          <Text style={styles.titleStyle}>{Constants.PAYMENT_SUCCESS}</Text>

          {/* Horizontal Line */}
          <View style={styles.horizontalLine} />

          {/* Total Payment */}
          <Text style={styles.totalPayment}> {Constants.TOTAL_PAYMENT} </Text>
          {/* USD */}
          <Text style={styles.totalAmount}> USD{transactionData?.totalPayment} </Text>

          {/* Details Box */}
          {/* TO & Payment Time */}
          <View style={styles.detailsBox}>
            <View style={styles.rowContainer}>
              <DataBox
                style={styles.dataBoxStyle}
                title={Constants.TO}
                showData={transactionData?.data[0]?.to}
              />

              <DataBox
                style={styles.dataBoxStyle}
                title={Constants.PAYMENT_TIME}
                showData={transactionData?.data[0]?.time}
              />
            </View>

            {/* FEE & Status */}
            <View style={styles.rowContainer}>
              <DataBox
                style={styles.dataBoxStyle}
                title={Constants.FEE}
                showData={transactionData?.data[0]?.fee}
              />

              <DataBox
                style={styles.dataBoxStyle}
                title={Constants.STATUS}
                showData={transactionData?.data[0]?.status}
              />
            </View>

            {/* Transaction Number & Pay with */}
            <View style={styles.rowContainer}>
              <DataBox
                style={styles.dataBoxStyle}
                title={Constants.TRANSACTION_NUMBER}
                showData={transactionData?.data[0]?.transactionNumber}
              />

              <DataBox
                style={styles.dataBoxStyle}
                title={Constants.PAY_WITH}
                showData={transactionData?.data[0]?.pay}
              />
            </View>
          </View>

          {/* Reciepient Details &  Icon */}
          <View style={styles.reciepientIconContainer}>
            <View style={styles.roundContainer}>
              <User />
            </View>

            {/* Reciepient Details */}
            <Text style={styles.reciepientTxt}> {Constants.DETAILS} </Text>
          </View>

          {/* Name & Acc Number */}
          <View style={styles.detailsBox}>
            <View style={styles.rowContainer}>
              <DataBox
                style={styles.dataBoxStyle}
                title={Constants.TRANSACTION_NUMBER}
                showData={transactionData?.recipientDetails[0]?.name}
              />

              <DataBox
                style={styles.dataBoxStyle}
                title={Constants.ACC_NUMBER}
                showData={transactionData?.recipientDetails[0]?.accNumber}
              />
            </View>

            {/* Country */}

            <View style={styles.rowContainer}>
              <DataBox
                style={styles.countryContainer}
                title={Constants.COUNTRY}
                showData={transactionData?.recipientDetails[0]?.country}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TransactionDetails;

const transactionData = {
  totalPayment: '1,000,000',
  data: [
    {
      to: 'Alexander',
      time: '25 Feb 2023, 13:22',
      fee: 'USD 0.00',
      status: 'Success',
      transactionNumber: '54730766081',
      pay: 'Wallet',
    },
  ],
  recipientDetails: [
    {
      name: 'Alexander',
      accNumber: '20052024347578',
      country: 'USA',
    },
  ],
};
