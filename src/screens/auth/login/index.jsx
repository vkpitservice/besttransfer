import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import BestTransFer from '@/assets/svg/CreateAcc/Best_TransFer.svg';
import { ColorSheet } from '@/utils/ColorSheet';
import TextInputField from '@/components/input/TextInput';
import PrimaryButton from '@/components/buttons/primaryButton';
import { styles } from './styles';
import { Constants } from './constants';

const CreateAccount = ({ navigation }) => {
  const [displayVisibleWindow, setDisplayVisibleWindow] = useState('personal');

  const [mobileNumber, setMobileNumber] = useState('');

  const [code, setCode] = useState({
    label: '',
    value: '',
  });

  const onPressPersonal = () => {
    setDisplayVisibleWindow('personal');
  };

  const onPressBusiness = () => {
    setDisplayVisibleWindow('business');
  };

  return (
    <ImageBackground
      source={require('@/assets/images/CreateAccountBG/Create_an_account.png')}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <StatusBar
              barStyle = 'dark-content'
              backgroundColor = {ColorSheet.PrimaryButton}
              translucent
            /> */}

        {/* Logo */}
        <View style={styles.best_transFer_Svg_container}>
          <BestTransFer width={130} height={130} />
        </View>

        {/* Main Container */}
        <View style={styles.main_container}>
          {/* Header Title */}
          <Text style={styles.titleText}> Create an Account </Text>

          {/* Enter Your 6-Digit Pin */}
          <TextInputField
            style={styles.textInput_Field}
            containerStyle={styles.textInput_container}
            placeholder={Constants.DIGIT_PIN}
          />

          {/* Sign Up Button */}
          <PrimaryButton style={styles.buttonStyle} title={'Sign Up'} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default CreateAccount;
