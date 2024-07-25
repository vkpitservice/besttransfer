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
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { ColorSheet } from '@/utils/ColorSheet';
import LogoResident from '@/assets/svg/resident/LogoResident.svg';
import { Constants } from './constants';
import PrimaryButton from '@/components/buttons/primaryButton';
import SelectTypeFieldBox from '@/components/cards/selectTypeField';
import PrimaryDropDown from '@/components/dropdowns/primary_dropdown';
import ProgressStatusBar from '@/screens/global/progressStatusBar';

const ResidentIdentityDocument = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(false);

  const [progress, setProgress] = useState('')

  const [selectCountry, setSelectCountry] = useState({
    label: '',
    value: '',
  })

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  }

  useEffect(() => {
    if (selectCountry?.value && selectedOption) {
      setProgress(1.0); // Both country and option selected
    } else if (selectCountry?.value) {
      setProgress(0.6); // Only country selected
    } else if (selectedOption) {
      setProgress(0.6); // Only option selected
    } else {
      setProgress(0.3); // Nothing selected
    }
  }, [selectCountry, selectedOption]);
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={{ flex: 1 }}>

        <StatusBar barStyle='dark-content' translucent backgroundColor={ColorSheet.Secondary} />

        <ScrollView
          contentContainerStyle={styles.scroll_container}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          {/* Logo Image  */}
          <View style={styles.main_container}>
            <View style={styles.logo_image}>
              <LogoResident width={90} height={90} />
            </View>

            {/* Progress Bar */}
            <View style = {styles.statusStyleContainer}>
              <ProgressStatusBar
                progress = {progress}
              />

              <ProgressStatusBar
                progress = {'0.0'}
              />

              <ProgressStatusBar
                progress = {'0.0'}
              />
            </View>

            {/*  Main Text */}
            <View style={styles.textContainer}>
              {/* First Text */}
              <Text style={styles.firstText}> {Constants.FIRST_TXT} </Text>
              {/* Second Text */}
              <Text style={styles.secondText}> {Constants.SECOND_TXT} </Text>
            </View>

            {/* DropDown */}
               {/* DropDown Title */}
            <Text style={styles.dropdownTitle}> {Constants.ISSUING_COUNTRY_LABEL} 
               <Text style = {styles.start}> {'*'} </Text>
            </Text>

            {/* DropDown List */}
            <PrimaryDropDown
              style={styles.dropdownStyle}
              data={countryLabels}
              value={selectCountry.value}
              onChange={setSelectCountry}
              placeholder={Constants.UNITED_KINGDOM}
            />

            {/* List Check Box */}
            {/* Verification Header */}
            <Text style={styles.verificationTitle}> {Constants.VERIFICATION_TYPE_LABEL} </Text>

            {/* List Check Box */}
            {Constants?.VerificationType.map((item, index) => (
                <SelectTypeFieldBox
                  style = {styles.listType}
                  key = {index}
                  title = {item}
                  onPress = {() => handleSelectOption(item)}
                  isChecked = {selectedOption === item}
                />
            ))}
            

            {/* URL Text*/}
            <TouchableOpacity
              style={styles.urlTextContainer}
              onPress={() => console.log('link')}
              activeOpacity={0.5}
            >
              <Text style={styles.urlText}> {Constants.URL_NAME} </Text>
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

export default ResidentIdentityDocument;

const countryLabels = [
  { 
    label: 'United States of America', 
    value: 'USA' 
  },
  { 
    label: 'United Kingdom', 
    value: 'UK' 
  },
  { 
    label: 'Canada', 
    value: 'CA' 
  },
  { 
    label: 'Australia', 
    value: 'AU' 
  },
  { 
    label: 'Germany', 
    value: 'DE' 
  },
  { 
    label: 'France', 
    value: 'FR' 
  },
  { 
    label: 'Italy', 
    value: 'IT' 
  },
  { 
    label: 'Spain', 
    value: 'ES' 
  },
  { 
    label: 'Netherlands', 
    value: 'NL' 
  },
  { 
    label: 'Japan', 
    value: 'JP' 
  }
];

const countryData = countryLabels.map((item) => {
  return { 
    label: item.label, 
    value: item.value 
  };
})
