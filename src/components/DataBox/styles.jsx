import { ColorSheet } from '@/utils/ColorSheet';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    borderRadius: hp(1),
    borderWidth: 1,
    borderColor: ColorSheet.TextInputFieldColor,
    justifyContent: 'center',
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
  },
  titleText: {
    fontSize: Platform.OS == 'android' ? RFValue(12) : RFValue(10),
    color: ColorSheet.CheckBox,
    fontWeight: '500',
  },
  showDataText: {
    paddingTop: hp(1),
    fontSize: Platform.OS == 'android' ? RFValue(12) : RFValue(11),
    color: ColorSheet.Text0,
    fontWeight: '500',
  },
});
