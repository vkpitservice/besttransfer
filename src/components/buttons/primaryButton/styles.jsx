import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ColorSheet } from '../../../utils/ColorSheet';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  button_root: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: ColorSheet.PrimaryButton,
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
  },
  title_txt: {
    fontSize: RFValue(16),
    color: ColorSheet.PrimaryButtonTxt,
    fontWeight: '500',
  },
});
