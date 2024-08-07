import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { styles } from './styles';
import BackTitleHomeComponent from '@/components/BackTitleHome';
import { Constants } from './constants';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ColorSheet } from '@/utils/ColorSheet';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const SelectBeneficiary = ({ navigation }) => {
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
        onPressBack={() => {
          navigation.goBack();
        }}
        onPressHome={() => {
          console.log('onPressHome');
        }}
      />

      {/* Image */}
      <Image
        style={styles.imageBackground}
        source={require('@/assets/images/beneficiary/SelectBeneficiary.png')}
      />

      {/* Main View Container */}
      <View style={styles.mainContainer}>
        {/* Card View */}
        <TouchableOpacity
          style={styles.CardContainer}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('PreviewScreen');
          }}
        >
          {/* Bank Account */}
          <Text style={styles.title}> {Constants.BANK_ACC} </Text>
          {/* Icon  */}
          <View style={styles.iconContainer}>
            <AntDesign name='right' size={wp(5)} color={ColorSheet.PrimaryButton} />
          </View>
        </TouchableOpacity>

        {/* Card View */}
        <TouchableOpacity
          style={styles.CardContainer}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('PreviewScreen');
          }}
        >
          {/* Bank Account */}
          <Text style={styles.title}> {Constants.UPI} </Text>
          {/* Icon  */}
          <View style={styles.iconContainer}>
            <AntDesign name='right' size={wp(5)} color={ColorSheet.PrimaryButton} />
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SelectBeneficiary;
