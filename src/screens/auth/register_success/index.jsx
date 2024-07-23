import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { styles } from './styles';
import PrimaryButton from '@/components/buttons/primaryButton';
import { Constants } from './Constants';
import { ColorSheet } from '@/utils/ColorSheet';

const RegisterSuccess = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        barStyle='dark-content'
        translucent={false}
        backgroundColor={ColorSheet.StatusColor}
      />

      {/* Animation And  SuccessFull Text*/}
      <View style={styles.lottie_txt_container}>
        <AnimatedLottieView
          style={styles.lottieStyle}
          source={require('../../../assets/animations/Animation_Success.json')}
          autoPlay
          speed={0.5}
          loop={true}
        />
        <Text style={styles.success_txt}> {Constants.SUCCESS_TXT} </Text>
      </View>

      {/* Continue DashBoard Button */}

      <PrimaryButton style={styles.buttonStyle} title={Constants.CONTINUE_TXT} />
    </SafeAreaView>
  );
};

export default RegisterSuccess;
