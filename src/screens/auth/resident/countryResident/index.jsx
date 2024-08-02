import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { ColorSheet } from '@/utils/ColorSheet';
import LogoResident from '@/assets/svg/resident/LogoResident.svg';
import { Constants } from './constants';
import PrimaryButton from '@/components/buttons/primaryButton';
import SelectTypeFieldBox from '@/components/cards/selectTypeField';

const ResidentCountry = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle='dark-content' backgroundColor={'transparent'} translucent={true} />

        <ScrollView
          contentContainerStyle={styles.scroll_container}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          {/* Logo Image  */}
          <View style={styles.main_container}>
            <View style={styles.logo_image}>
              <LogoResident width={130} height={130} />
            </View>

            {/*  Main Text */}
            <View style={styles.textContainer}>
              {/* First Text */}
              <Text style={styles.firstText}> {Constants.FIRST_TXT} </Text>
              {/* Second Text */}
              <Text style={styles.secondText}> {Constants.SECOND_TXT} </Text>
            </View>

            {/* List Check Box */}
            {/* List Check Box */}
            <SelectTypeFieldBox
              style={styles.listContainer}
              imageSource={require('@/assets/images/resident/NonUs.png')}
              title={Constants.NON_US_RESIDENT}
              type='nonUs'
              isChecked={selectedOption === 'nonUS'}
              onPress={() => handleSelectOption('nonUS')}
            />

            <SelectTypeFieldBox
              style={styles.listContainer}
              imageSource={require('@/assets/images/resident/Us.png')}
              title={Constants.US_RESIDENT}
              type='us'
              isChecked={selectedOption === 'US'}
              onPress={() => handleSelectOption('US')}
            />

            {/* URL Text*/}
            <TouchableOpacity
              style={styles.urlTextContainer}
              onPress={() => console.log('link')}
              activeOpacity={0.5}
            >
              <Text style={styles.urlText}>{Constants.URL_NAME} </Text>
            </TouchableOpacity>
          </View>

          {/* Continue Button Image View */}
          <View style={styles.buttonImgContainer}>
            {/* Continue Button */}
            <PrimaryButton
              style={styles.buttonStyle}
              title={Constants.CONTINUE}
              onPress={() => navigation.navigate('ResidentIdentityDocumentScreen')}
            />
            {/* Image View */}
            <Image
              source={require('@/assets/images/resident/PoweredBySumSub.png')}
              style={styles.imageStyle}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ResidentCountry;
