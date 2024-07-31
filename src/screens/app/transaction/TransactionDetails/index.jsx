import {
  ActivityIndicator,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { ColorSheet } from '@/utils/ColorSheet';
import { styles } from './styles';
import BackTitleAddComponent from '@/components/BackTitleAdd';
import { Constants } from './constants';
import TransactionListShowData from '@/components/transaction/transactionListShowData';
import BackTitleHomeComponent from '@/components/BackTitleHome';

const TransactionDetails = ({ navigation }) => {
  
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

      {/* List Of Data */}
      <View style={styles.mainContainer}>

        {/* Image */}
        <Image
          style = {styles.imageMain}
          source={require('@/assets/images/Transaction/TransactionDetailsImg.png')}
        />
        
      </View>
    </KeyboardAvoidingView>
  );
};

export default TransactionDetails;
