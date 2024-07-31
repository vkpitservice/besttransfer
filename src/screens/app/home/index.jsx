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
import TransferWelcomeDashboardComponent from '@/components/transaction/transferWelcomeDashboard';
import { Constants } from './constants';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import TransferSavingRecieving from '@/components/transaction/transferSavingReceiving';
import DashedBorder from '@/assets/svg/transaction/dashedBorder.svg';
import SecondaryButton from '@/components/buttons/secondaryButton';

const HomeScreen = ({ navigation }) => {
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
        source={require('@/assets/images/Transaction/BestWelcomeDashboard.png')}
      />

      {/* Welcome, Name And LogOut */}
      <TransferWelcomeDashboardComponent
        imageSource={require('@/assets/images/Transaction/WelcomeProfilePic.png')}
        title={Constants.WELCOME_BACK}
        name={'Arianna'}
        onPress={() => {
          console.log('logOut');
        }}
      />

      {/* mainContainer */}
      <View style={styles.mainContainer}>
        {/* ExChange Rate */}
        <View style={styles.exchangeContainer}>
          <Text style={styles.exchangeText}>
            {' '}
            {Constants.EXCHANGE_RATE}:<Text style={styles.exchangeAmount}> £{'1=107.34 INR'} </Text>
          </Text>
        </View>

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

        {/* Dashed Border */}
        <DashedBorder style={styles.dashedBorder} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
