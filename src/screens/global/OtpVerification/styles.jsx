import { ColorSheet } from '@/utils/ColorSheet';
import { StyleSheet } from 'react-native';
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
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    resizeMode: 'cover',
    width: wp(100),
    height: hp(100),
  },
  scroll_container: {
    width: wp(100),
    paddingBottom: hp(5),
  },
  title: {
    color: ColorSheet.White,
    fontSize: RFValue(16),
    fontWeight: '700',
    textAlign: 'center',
    marginTop: hp(8),
  },
  otp_logo: {
    height: hp(25),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: hp(10),
  },
  verification: {
    color: ColorSheet.Text3,
    fontSize: RFValue(18),
    fontWeight: '700',
    textAlign: 'center',
    marginTop: hp(6),
  },
  otpText: {
    color: ColorSheet.Text4,
    fontSize: RFValue(12),
    textAlign: 'center',
    marginTop: hp(2),
    fontWeight: '400',
  },
  numberView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
  },
  numberText: {
    color: ColorSheet.Text4,
    fontSize: RFValue(12),
    textAlign: 'center',
    fontWeight: '800',
  },
  changeButton: {
    marginLeft: wp(2),
  },
  changeText: {
    color: ColorSheet.PrimaryButton,
    fontSize: RFValue(12),
    fontWeight: '600',
    textDecorationLine: 'underline',
  },

  otpInput: {
    marginTop: hp(3),
    marginHorizontal: wp(5),
  },

  resendView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(4),
  },
  resendText: {
    color: ColorSheet.CheckBox,
    fontSize: RFValue(12),
    textAlign: 'center',
    fontWeight: '400',
  },
  resendButton: {
    marginLeft: wp(2),
  },
  resendButtonText: {
    color: ColorSheet.Text5,
    fontSize: RFValue(12),
    fontWeight: '400',
  },

  resendSuccessView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(6),
  },
  resendSuccessTextContainer: {
    backgroundColor: ColorSheet.Green,
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(5),
    borderRadius: 10,
  },
  resendSuccessText: {
    color: ColorSheet.White,
    fontSize: RFValue(12),
    fontWeight: '700',
  },
  button: {
    marginTop: hp(1),
    marginHorizontal: wp(5),
  },
});
