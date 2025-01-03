import { Image, KeyboardAvoidingView, Platform, ScrollView, StatusBar, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import BackTitleHomeComponent from '@/components/BackTitleHome';
import { Constants } from './constants';
import NonEditTextInput from '@/components/input/profile/NonEditTextInput';
import EditTextInput from '@/components/input/profile/EditTextInput';
import EditPhoneTextInput from '@/components/input/profile/EditPhoneNumber';
import PrimaryButton from '@/components/buttons/primaryButton';
import { StackActions } from '@react-navigation/native';

const EditProfile = ({ navigation }) => {
  const [form, setForm] = useState({
    firstName: profileList[0]?.responseDto?.firstName,
    lastName: profileList[0]?.responseDto?.lastName,
    email: profileList[0]?.responseDto?.email,
    countryResident: profileList[0]?.responseDto?.countryResident,
    nationality: profileList[0]?.responseDto?.nationality,
    countryImage: profileList[0]?.responseDto?.countryDto?.imageUrl,
    countryCode: profileList[0]?.responseDto?.countryDto?.code,
    phoneNumber: profileList[0]?.responseDto?.phoneNumber,
  });

  const handleSaveChange = () => {
    // Logic to save the changes, e.g., make an API request to update user profile
    console.log('Saving changes:', form);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      {/* StatusBar */}
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent={true} />

      {/* Back And Header And Home */}
      <BackTitleHomeComponent
        style={styles.titleHeaderContainer}
        title={Constants.HEADER_TITLE}
        onPressBack = {() => {
                       navigation.goBack()
                   }}
                   onPressHome = {() => {
                      navigation.dispatch(StackActions.replace('AppBottomTab'))
                   }}
      />

      {/* Image */}
      <Image
        style={styles.imageBackground}
        source={require('@/assets/images/profile/EditProfileImg.png')}
      />

      {/* Main View Container */}
      <View style={styles.mainViewContainer}>
        {/* ScrollView */}
        <ScrollView
          contentContainerStyle={styles.scroll_container}
          // bounces={false}
          showsVerticalScrollIndicator={false}
        >
          {/*  */}
          <View style={styles.main_Container}>
            {/* Edit First Name Profile */}
            <NonEditTextInput
              title={Constants.FIRST_NAME}
              value={form.firstName}
              onChangeText={(text) => setForm({ ...form, firstName: text })}
              keyboardType={'default'}
              autoCapitalize={'none'}
              editable={false}
            />

            {/* Edit Last Name Profile */}
            <NonEditTextInput
              title={Constants.LAST_NAME}
              value={form.lastName}
              onChangeText={(text) => setForm({ ...form, lastName: text })}
              keyboardType={'default'}
              autoCapitalize={'none'}
              editable={false}
            />

            {/* Edit Email Profile */}
            <EditTextInput
              title={Constants.EMAIL}
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              editable={true}
              onPressEdit={() => console.log('Edit Email')}
            />

            {/* Country of residence */}
            <NonEditTextInput
              title={Constants.COUNTRY_RESIDENCE}
              imageSource={require('@/assets/images/Transaction/CountryUk.png')}
              value={form.countryResident}
              onChangeText={(text) => setForm({ ...form, countryResident: text })}
              keyboardType={'default'}
              autoCapitalize={'none'}
              editable={false}
            />

            {/* Edit Nationality Profile */}
            <NonEditTextInput
              title={Constants.NATIONALITY}
              value={form.nationality}
              onChangeText={(text) => setForm({ ...form, nationality: text })}
              keyboardType={'default'}
              autoCapitalize={'none'}
              editable={false}
            />

            <EditPhoneTextInput
              code={form.countryCode}
              imageSource={form.countryImage}
              value={form.phoneNumber}
              onChangeText={(text) => setForm({ ...form, phoneNumber: text })}
              keyboardType={'default'}
              autoCapitalize={'none'}
              editable={true}
              onPressEdit={() => console.log('Edit Email')}
            />

            {/* Button */}
            <PrimaryButton
              style={styles.btnContainer}
              title={Constants.SAVE_CHANGE}
              onPress={handleSaveChange}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;

const profileList = [
  {
    userId: 1,
    responseDto: {
      firstName: 'Arianna',
      lastName: 'Robertson',
      email: 'Arianna@gmail.com',
      countryResident: 'United Kingdom',
      nationality: 'Uk',
      phoneNumber: '789 675 4321',
      countryDto: {
        imageUrl: require('@/assets/images/Transaction/CountryUk.png'),
        code: '+44',
      },
    },
  },
];
