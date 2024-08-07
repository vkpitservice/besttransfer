import { ColorSheet } from '@/utils/ColorSheet';
import { Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: wp(100),
    backgroundColor: ColorSheet.backGroundColor,
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    resizeMode: 'stretch',
    width: wp(100),
    height: hp(100),
  },
  scroll_container: {
    width: wp(100),
    paddingBottom: hp(5),
  },

  logo_container: {
    marginTop: Platform.OS == 'android' ? hp(9) : hp(10),
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
  subTitleText: {
    fontSize: RFValue(12),
    fontWeight: '600',
    color: ColorSheet.SecondaryText,
    marginTop: hp(3),
  },

  email_Field: {
    width: wp(90),
    marginTop: hp(5),
    // backgroundColor: 'yellow',
  },
  password_Field: {
    width: wp(90),
    marginTop: hp(2),
    // backgroundColor: 'red',
  },
  rememberView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(90),
    marginTop: hp(4),
    alignItems: 'center',
  },
  rememberLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberLeftText: {
    fontSize: RFValue(13),
    color: ColorSheet.Text1,
    marginLeft: wp(2),
    fontWeight: '500',
  },
  forgetPinButton: {},
  forgetPinText: {
    fontSize: RFValue(13),
    color: ColorSheet.Text1,
    marginLeft: wp(2),
    fontWeight: '500',
  },
  buttonStyle: {
    width: wp(90),
    height: hp(6),
    marginTop: hp(6),
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(4),
  },
  footerText: {
    fontSize: RFValue(13),
    color: ColorSheet.PrimaryTxt,
    fontWeight: '600',
  },
  registerButton: {
    marginLeft: wp(1),
  },
  registerButtonText: {
    fontSize: RFValue(13),
    color: ColorSheet.PrimaryTxt,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
