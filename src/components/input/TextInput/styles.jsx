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
    width: wp(100),
    alignItems: 'center',
    marginBottom: hp(2),
  },
  textInput: {
    fontSize: RFValue(14),
    color: ColorSheet.TextInputPlaceholderColor,
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    backgroundColor: ColorSheet.TextInputFieldColor,
    borderRadius: hp(1),
    borderWidth: 1,
    borderColor: ColorSheet.White,
  },
  errorText: {
    fontSize: RFValue(14),
    color: ColorSheet.Error,
    marginTop: hp(1),
  },
});
