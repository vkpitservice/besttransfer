import {
  ActivityIndicator,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { ColorSheet } from '@/utils/ColorSheet';
import TransferWelcomeDashboardComponent from '@/components/transaction/transferWelcomeDashboard';
import { Constants } from './constants';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import TransferSavingRecieving from '@/components/transaction/transferSavingReceiving';
import DashedBorder from '@/assets/svg/transaction/dashedBorder.svg';
import SecondaryButton from '@/components/buttons/secondaryButton';

// This is the main component for the TransferWelcomeDashboard screen.
const TransferWelcomeDashboard = ({ navigation }) => {
  // The component returns a KeyboardAvoidingView which is a container that
  // automatically adjusts its behavior based on the platform.
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
     {/* This is the status bar at the top of the screen. It sets the bar style
     to light-content and the background color to the primary button color. */}
      <StatusBar
        barStyle='light-content'
        backgroundColor={ColorSheet.PrimaryButton}
        translucent={false}
      />

      {/* This is an image that displays the background of the screen. */}
      <Image
        style={styles.backgroundImage}
        source={require('@/assets/images/Transaction/BestWelcomeDashboard.png')}
      />

      {/* This is the TransferWelcomeDashboardComponent which displays the welcome */}
         {/* message, user name, and a logout button. */}
      <TransferWelcomeDashboardComponent
        imageSource={require('@/assets/images/Transaction/WelcomeProfilePic.png')}
        title={Constants.WELCOME_BACK}
        name={'Arianna'}
        onPress={() => {
          console.log('logOut');
        }}
      />

      {/* This is the main container for the rest of the screen. */}
      <View style={styles.mainContainer}>
        {/* This is a ScrollView which allows the user to scroll through the content. */}
        <ScrollView
          contentContainerStyle={styles.scroll_container}
          // bounces={false} disables the bouncing effect when scrolling.
          showsVerticalScrollIndicator={false}
        >
          <View style = {styles.boxViewContainer}>
             {/* This displays the exchange rate. */}
          <View style={styles.exchangeContainer}>
            <Text style={styles.exchangeText}>
              {' '}
              {Constants.EXCHANGE_RATE}:
              <Text style={styles.exchangeAmount}> £{'1=107.34 INR'} </Text>
            </Text>
          </View>

          {/* This displays the saving and receiving details. */}
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

          {/* This displays a dashed border. */}
          <DashedBorder style={styles.dashedBorder} />

          {/* This displays the fees and total payment. */}
          <View style={styles.feesTotalPaymentContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.text01}> {Constants.FEE} :</Text>
              <Text style={styles.textAmount}> £{'0.00'} </Text>
            </View>

            <View style={styles.rowContainer}>
              <Text style={styles.text01}> {Constants.TOTAL_PAYMENT} :</Text>
              <Text style={styles.textAmount}> £{'1000'} </Text>
            </View>
          </View>

          {/* This displays another dashed border. */}
          <DashedBorder style={styles.dashedBorder} />

          {/* This is a button that navigates to the TransactionListScreen when pressed. */}
          <SecondaryButton
            style={styles.btnContainer}
            title={Constants.SEND}
            onPress={() => {
              navigation.navigate('TransactionListScreen');
            }}
          />

          {/* This is an image that displays at the bottom of the screen. */}
          <Image
            style={styles.imageStyle}
            source={require('@/assets/images/Transaction/HomeImage.png')}
          />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TransferWelcomeDashboard;
