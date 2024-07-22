import { SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import AnimatedLottieView from "lottie-react-native";
import { styles } from './styles';
import PrimaryButton from '@/components/buttons/primaryButton';

const RegisterSuccessFull = () => {
  return (
    <SafeAreaView style = {styles.root}>

      {/* Animation And  SuccessFull Text*/}
      <View style = {styles.lottie_txt_container}>
        <AnimatedLottieView
            style = {styles.lottieStyle}
            source = {require('@/assets/animations/Animation-success.json')}
            autoPlay
            speed = {0.5}
            loop = {true}
        />

        <Text style = {styles.success_txt} > {'Register SuccessFull'} </Text>
      </View>

      {/* Continue DashBoard Button */}
      <View style = {styles.btnContainer}>
        <PrimaryButton
          style = {styles.buttonStyle}
          title = {'Continue to dashboard'}
        />
      </View>
    </SafeAreaView>
  )
}

export default RegisterSuccessFull;
