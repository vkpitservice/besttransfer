import {
  Alert,
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
import LogoResident from '@/assets/svg/resident/LogoResident.svg';
import { styles } from './styles';
import PrimaryButton from '@/components/buttons/primaryButton';
import { Constants } from './constants';
import PrimaryDropDown from '@/components/dropdowns/primary_dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';
import { ColorSheet } from '@/utils/ColorSheet';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ErrorFlash } from '@/utils/flashMessage';
import ShowImage from './showImage';
import AvoidImageFormat from './AvoidImageFromat';
import ProgressStatusBar from '@/components/progressStatusBar';

const UploadDocumentResident = ({navigation}) => {
  const [progress, setProgress] = useState('');

  const [selectImgFormat, setSelectImgFormat] = useState({
    label: '',
    value: '',
  });

  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        const imageName = result.assets[0].uri.split('/').pop();
        setImage(result.assets[0].uri);
        setImageName(imageName);
        console.log('imageName', imageName);
      } else {
        Alert.alert('Error", "Image picking was canceled.');
        console.log('User cancelled image picker');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to pick an image.');
    }
  };

  useEffect(() => {
    if (selectImgFormat?.value && image) {
      setProgress(1.0);
    } else if (selectImgFormat?.value) {
      setProgress(0.6);
    } else if (image) {
      setProgress(0.6);
    } else {
      setProgress(0.3);
    }
  }, [selectImgFormat, image]);

  const handleSubmit = () => {
    if (selectImgFormat?.value == '') {
      ErrorFlash(Constants.SELECT_TYPE_REQUIRE);
    } else if (image == null) {
      ErrorFlash(Constants.IMAGE_REQUIRE);
    } else {
      // navigation.navigate('ResidentIdentityDocument');
      Alert.alert('Success')
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.root_container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* Status Bar */}
        <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />

        {/* ScrollView */}
        <ScrollView
          contentContainerStyle={styles.scrollViewStyle}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.main_view_Container}>
            {/* Header Logo */}
            <View style={styles.logoContainer}>
              <LogoResident width={100} height={100} />
            </View>

            {/* Back And Progress Bar */}
            <View style={styles.progressBarContainer}>
              {/* Back Icon */}
              <TouchableOpacity
                style = {styles.backIcon}
                activeOpacity = {0.5}
                onPress={() => {
                  navigation.goBack()
                }}
              >
                <MaterialIcons 
                name={'arrow-back-ios'} 
                size={30} 
                color={ColorSheet.PrimaryButton} 
              />
              </TouchableOpacity>
 
              {/* Progress Bar */}
              <ProgressStatusBar 
                progress1={1.0} 
                progress2={progress} 
                progress3={0.0} 
              />
            </View>

            {/* SubTitle */}
            <View style={styles.subTitleContainer}>
              <Text style={styles.subTitleTxtStyle}> {Constants.SUB_TITLE_01} </Text>
              <Text style={styles.subTitleTxtStyle}> {Constants.SUB_TITLE_02} </Text>
            </View>

            {/* DropDown */}
            <PrimaryDropDown
              style={styles.dropDownStyle}
              data={ListData}
              placeholder={Constants.SELECT_TYPE}
              value={selectImgFormat.value}
              onChange={setSelectImgFormat}
            />

            {/* Import Image like JPG PNG  */}
            <View style={styles.selectImgContainer}>
              {image ? (
                <ShowImage
                  imageSource={{ uri: image }}
                  onPress = {() => {
                    setImage('')
                  }}
                />
              ) : (
                <>
                  <Entypo name='upload-to-cloud' color={ColorSheet.UploadIcon} size={35} />

                  <TouchableOpacity onPress={pickImage} activeOpacity={0.5}>
                    <Text style={styles.clickToUpload}> {Constants.CLICK_UPLOAD} </Text>
                  </TouchableOpacity>

                  <Text style={styles.jpg_pdf_txt}> {Constants.JPG_PDF} </Text>
                </>
              )}
            </View>

            {/* WE Don't Accept */}
            <View style={styles.we_donot_accpet}>
              <Text style={styles.acceptTxt}> {Constants.WE_DO_NOT_ACCEPT} </Text>

              {/* Screenshots & Reciept for purchases & Medical Bills*/}
              {Constants.Header.map((item, index) => (
                 <AvoidImageFormat key={index} title={item} />
              ))}
            </View>
          </View>

          {/* Continue Button Image View */}
          <View style={styles.buttonImgContainer}>
            {/* Continue Button */}
            <PrimaryButton
              style={styles.buttonStyle}
              title={Constants.CONTINUE}
              onPress={handleSubmit}
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

export default UploadDocumentResident;

const ListData = [
  {
    label: 'Image',
    value: 'img',
  },
  {
    label: 'Document',
    value: 'doc',
  },
  {
    label: 'Pdf',
    value: 'pdf',
  },
  {
    label: 'Jpg',
    value: 'jpg',
  },
  {
    label: 'Png',
    value: 'png',
  },
];
