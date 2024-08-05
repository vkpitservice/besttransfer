import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import BackTitleHomeComponent from '@/components/BackTitleHome';
import { Constants } from './constants';
import TransferDetailsEdit from '@/components/preview/transferDetailsEdit';
import TextInputField from '@/components/input/TextInput';
import PrimaryDropDown from '@/components/dropdowns/primary_dropdown';
import PrimaryButton from '@/components/buttons/primaryButton';
import { ErrorFlash } from '@/utils/flashMessage';
import RecipientDetails from '@/components/preview/recipientDetails';

const Preview = ({ navigation }) => {
  const [from, setForm] = useState({
    reference: '',
    referenceError: '',
  });

  const [selectReason, setSelectReason] = useState({
    label: '',
    value: '',
  });

  const handleContinue = () => {
    if (from.reference == '') {
      ErrorFlash(Constants.REFERENCE_REQUIRED);
    } else if (selectReason.value == '') {
      ErrorFlash(Constants.REASON_REQUIRE);
    } else {
    //   navigation.navigate('BeneficiaryScreen');
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      {/* StatusBar */}
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent={true} />

      {/* Back And Header And Home */}
      <BackTitleHomeComponent
        style = {styles.titleHeaderContainer}
        title={Constants.HEADER_TITLE}
        onPressBack={() => {
          console.log('onPressBack');
        }}
        onPressHome={() => {
          console.log('onPressHome');
        }}
      />

      {/* Image */}
      <Image
        style={styles.imageBackground}
        source={require('@/assets/images/beneficiary/SelectBeneficiary.png')}
      />

      {/* Main View Container */}
      <View style={styles.mainViewContainer}>
        {/* ScrollView */}
        <ScrollView
          contentContainerStyle={styles.scroll_container}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* Main Container */}
          <View style={styles.main_Container}>
            {/* Transfer Details */}
            <View style={styles.transferDetailsContainer}>
              {/* Row Container */}
              <View style={styles.rowContainer}>
                <Text style={styles.commonTextTitle}> {Constants.TRANSFER_DETAILS} </Text>
                <Text style={styles.commonTextTitle}> {Constants.EDIT_AMOUNT} </Text>
              </View>
              {/* Exchange rae */}
              <TransferDetailsEdit 
                send={previewData[0].transferDetails.exchange[0].send}
                recieve = {previewData[0].transferDetails.exchange[0].receive}
                theyRecieve = {previewData[0].transferDetails.theyReceive}
                youSend = {previewData[0].transferDetails.youSend} 
                fee = {previewData[0].transferDetails.fee} 
                totalPayment = {previewData[0].transferDetails.totalPayment} 
              />

            </View>

            {/* Recipient  Details*/}
            <View style={styles.transferDetailsContainer}>
              {/* Row Container */}
              <View style={styles.rowContainer}>
                <Text style={styles.commonTextTitle}> {Constants.RECIPIENT_DETAILS} </Text>
              </View>
              {/* Recipient Details List*/}
              <RecipientDetails 
                name = {previewData[0].recipientDetails.name} 
                accNumber = {previewData[0].recipientDetails.accNumber} 
                ifscCode = {previewData[0].recipientDetails.ifscCode}
              />

            </View>

            {/* Reference Input Field */}
            <TextInputField
              placeholder={Constants.REFERENCE}
              value={from.reference}
              onChangeText={(text) => setForm({ ...from, reference: text })}
              textError={from.referenceError}
              onFocus={() => setForm({ ...from, reasonError: '' })}
              onBlur={() => {
                if (!from.reference) {
                  setForm({ ...from, referenceError: Constants.REFERENCE_REQUIRED });
                } else {
                  setForm({ ...from, referenceError: '' });
                }
              }}
            />

            {/* DropDown */}
            <PrimaryDropDown
              style = {styles.dropContainer}
              data={listReason}
              placeholder={Constants.SELECT_REASON}
              value={selectReason.value}
              onChange={setSelectReason}
            />

            {/* Continue Button */}
            <PrimaryButton
                style = {styles.btnContainer}
                title = {Constants.BTN_NAME}
                onPress = {handleContinue}
              />

          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Preview;

const listReason = [
  {
    label: 'Transfer',
    value: 'Transfer',
  },
  {
    label: 'Fees',
    value: 'Fees',
  },
  {
    label: 'Other',
    value: 'Other',
  },
];

const previewData = [
    {
      transferDetails: {
        exchange: [
          {
            send: '1GBP',
            receive: '105.56INR'
          }
        ], 
        theyReceive: '13,665',
        youSend: '139.65',
        fee: '2.00',
        totalPayment: '1003.99'
      },
      recipientDetails: {
        name: 'Arianna Craigg',
        accNumber: 88456912,
        ifscCode: '040004',
      }
    }
];
