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
import React from 'react';
import { ColorSheet } from '@/utils/ColorSheet';
import { Constants } from './constants';
import { FontAwesome } from '@expo/vector-icons';
import TransferSavingRecieving from '@/components/transaction/transferSavingReceiving';
import BackTitleAddComponent from '@/components/BackTitleAdd';
import BackTitleHomeComponent from '@/components/BackTitleHome';
import { styles } from './styles';

const TransferEnterAmount = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      {/* Status Bar */}
      <StatusBar
        barStyle='light-content'
        backgroundColor={ColorSheet.PrimaryButton}
        translucent={false}
      />

      {/* Image */}
      <Image
        style={styles.backgroundImage}
        source={require('@/assets/images/Transaction/TransferEnterAmount.png')}
      />

      {/* Welcome, Name And LogOut */}
      <BackTitleHomeComponent
        title={Constants.HEADER_TITLE}
        onPressBack={() => {
          navigation.goBack();
        }}
        onPressHome={() => {
          console.log('home');
        }}
      />

      {/* mainContainer */}
      <View style={styles.mainContainer}>
        {/* Tranfer Detalis */}
        <TransferSavingRecieving
          saveTitle={Constants.SAVING_ACC}
          saveAmount={'1000'}
          saveCountry={'GBP'}
          saveImageSource={require('@/assets/images/Transaction/CountryUk.png')}
          recieveTitle={Constants.RECIEVING_AMOUNT}
          recieveAmount={'1714'}
          recieveCountry={'INR'}
          recieveImageSource={require('@/assets/images/Transaction/countryIndia.png')}
        />

        <View style={styles.feesTotalPaymentContainer}>
          {/* Exchange rate */}
          <View style={styles.row_exchange_fee_Container}>
            <Text style={styles.text01}> {Constants.EXCHANGE_RATE} </Text>
            <Text style={styles.textAmount}> £{'1=107.34 INR'} </Text>
          </View>

          {/* Fees */}
          <View style={styles.row_exchange_fee_Container}>
            <Text style={styles.text01}> {Constants.FEE} </Text>
            <Text style={styles.textAmount}> £{'0.00'} </Text>
          </View>

          {/* TotalPayment */}
          <View style={styles.rowContainer}>
            <Text style={styles.text01}> {Constants.TOTAL_PAYMENT} </Text>
            <Text style={styles.textAmount}> £{'1000'} </Text>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.btnContainer}
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('TransactionListScreen');
          }}
        >
          {/* Icon */}
          <FontAwesome name='send' size={20} color={ColorSheet.PrimaryButtonTxt} />

          {/* Button Text */}
          <Text style={styles.buttonText}> {Constants.SEND} </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TransferEnterAmount;
