import React from 'react';
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
import { ColorSheet } from '@/utils/ColorSheet';
import { Constants } from './constants';
import { FontAwesome } from '@expo/vector-icons';
import TransferSavingRecieving from '@/components/transaction/transferSavingReceiving';
import BackTitleHomeComponent from '@/components/BackTitleHome';
import { styles } from './styles';
import DashedBorder from '@/assets/svg/transaction/dashedBorder.svg';
import SecondaryButton from '@/components/buttons/secondaryButton';
import CurrencyCoveter from '@/components/transaction/currency_convater';

const TransferEnterAmount = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Status Bar */}
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent={true} />

      {/* Image */}
      <Image
        style={styles.backgroundImage}
        source={require('@/assets/images/Transaction/TransferEnterAmount.png')}
      />

      {/* Welcome, Name And LogOut */}
      <BackTitleHomeComponent
        title={Constants.HEADER_TITLE}
        onPressBack={() => navigation.goBack()}
        onPressHome={() => console.log('home')}
      />

      {/* Main Container */}
      <View style={styles.mainContainer}>
        {/* Transfer Details */}
        <CurrencyCoveter
          containerStyle={styles.CurrencyCoveterContainer}
          sendingAmountValue={'1000.00'}
          onChangeSendingAmount={(text) => console.log(text)}
          sendingCurrency={'GBP'}
          receivingAmountValue={'1714.00'}
          onChangeReceivingAmount={(text) => console.log(text)}
          receivingCurrency={'INR'}
          sendingCurrencySource={require('@/assets/images/Transaction/CountryUk.png')}
          receivingCurrencySource={require('@/assets/images/Transaction/countryIndia.png')}
        />

        {/* Dashed Border */}
        <DashedBorder width={Platform.OS === 'ios' ? 390 : 340} style={styles.dashedBorder} />

        {/* Exchange rate */}
        <View style={styles.row_exchange_fee_Container}>
          <Text style={styles.text01}>{Constants.EXCHANGE_RATE}</Text>
          <Text style={styles.textAmount}>£{'1=107.34 INR'}</Text>
        </View>

        {/* Fees */}
        <View style={styles.row_exchange_fee_Container}>
          <Text style={styles.text01}>{Constants.FEE}</Text>
          <Text style={styles.textAmount}>£{'0.00'}</Text>
        </View>

        <DashedBorder width={Platform.OS === 'ios' ? 390 : 340} style={styles.dashedBorder} />

        {/* Total Payment */}
        <View style={styles.rowContainer}>
          <Text style={styles.text01}>{Constants.TOTAL_PAYMENT}</Text>
          <Text style={styles.textAmount}>£{'1000'}</Text>
        </View>

        <DashedBorder width={Platform.OS === 'ios' ? 390 : 340} style={styles.dashedBorder} />

        {/* Button */}
        <SecondaryButton
          style={styles.btnContainer}
          title={Constants.SEND}
          onPress={() => navigation.navigate('TransactionDetailsScreen')}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default TransferEnterAmount;
