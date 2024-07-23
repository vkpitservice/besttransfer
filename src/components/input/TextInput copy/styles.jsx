import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ColorSheet } from '../../../utils/ColorSheet';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
  },
  textInput: {
    fontSize: RFValue(14),
    color: ColorSheet.TextInputPlaceholderColor,
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
    backgroundColor: ColorSheet.TextInputFieldColor,
    borderRadius: 10,
    fontWeight: '500',
    width: '100%',
  },
  errorText: {
    fontSize: RFValue(12),
    color: ColorSheet.Error,
  },
});
