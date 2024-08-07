import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import React, { useState } from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { styles } from './styles';
import PrimaryButton from '@/components/buttons/primaryButton';
import { ColorSheet } from '@/utils/ColorSheet';
import { Constants } from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Success = ({ navigation }) => {
  const [loading, setloading] = useState(false);
  
  const onPressSubmit = async() => {
      setloading(true)
      let username = await AsyncStorage.getItem('reg_email');
      let password = await AsyncStorage.getItem('reg_pass');
      var loginresp = await postRequest(DefaultConstants.BASE_URL + 'auth/token',{username:username,password:password,grant_type:'password',},{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'accept':'application/json'
        }
      });
      if(loginresp[0]==200)
      {
        setAsyncData('login_token',loginresp[1].data.access_token)
        setAsyncData('login_first_name', loginresp[1].data.user.first_name);
        setAsyncData('login_last_name', loginresp[1].data.user.last_name);
        setAsyncData('login_mobile', loginresp[1].data.user.mobile);
        setAsyncData('login_email', loginresp[1].data.user.email);
        setAsyncData('reg_id', JSON.stringify(loginresp[1].data.user.id));
        await AsyncStorage.removeItem('reg_pass');
        navigation.navigate('AppBottomTab');
      }
      else
      {
        ErrorFlash(loginresp[1])
      }
      setloading(false)
  };
  const setAsyncData = async(key,value) =>{
    await AsyncStorage.setItem(key,value)
  }


  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle='dark-content' backgroundColor={'transparent'} translucent={true} />

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

      <PrimaryButton
        onPress={onPressSubmit}
        style={styles.buttonStyle}
        title={Constants.CONTINUE_TXT}
        loading={loading}
      />
    </SafeAreaView>
  );
};

export default Success;
