import { ColorSheet } from '@/utils/ColorSheet';
import { Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo_container: {
    marginTop: Platform.OS == 'android' ? hp(6) : hp(3),
    alignItems: 'center',
  },
  main_container: {
    marginTop: hp(8),
    alignItems: 'center',
  },
  titleText: {
    fontSize: RFValue(16),
    fontWeight: '700',
    color: ColorSheet.PrimaryTxt,
  },
  row_bg_container: {
    width: wp(90),
    marginTop: hp(3),
    marginBottom: hp(4),
    borderRadius: hp(1),
    padding: hp(0.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: ColorSheet.PrimaryButton,
  },
  common_container: {
    width: wp(43),
    height: hp(5),
    borderRadius: hp(1),
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  common_txt_style: {
    fontSize: RFValue(12),
    fontWeight: '600',
  },
  textInput_container: {
    marginBottom: hp(3),
  },
  textInput_Field: {
    width: wp(90),
    height: hp(6),
    // backgroundColor: 'yellow',
  },
  buttonStyle: {
    width: wp(90),
    height: hp(6),
    marginTop: hp(2),
  },
});
