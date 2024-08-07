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
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    resizeMode: 'cover',
    width: wp(100),
    height: hp(100),
  },
  mainContainer: {
    width: wp(90),
    paddingBottom: hp(2),

    alignSelf: 'center',
    // backgroundColor: 'pink',
    marginBottom: hp(15),
  },
  scrollView: { marginTop: Platform.OS == 'android' ? hp(8) : hp(6) },
  exchangeContainer: {
    width: '100%',
    padding: hp(1),
    alignItems: 'center',
    backgroundColor: ColorSheet.PrimaryButton,
    borderRadius: hp(1),
  },
  exchangeText: {
    fontSize: RFValue(14),
    fontWeight: '700',
    color: ColorSheet.PrimaryButtonTxt,
  },
  exchangeAmount: {
    fontSize: RFValue(14),
    fontWeight: '700',
    color: ColorSheet.Secondary,
  },
  dashedBorder: {
    marginTop: hp(0),
    alignSelf: 'center',
  },
  feesTotalPaymentContainer: {
    marginVertical: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: ColorSheet.Primary,
    paddingHorizontal: wp(1),
    // backgroundColor: 'red'
  },

  text01: {
    fontSize: RFValue(14),
    fontWeight: '600',
    color: ColorSheet.PrimaryButton,
  },
  textAmount: {
    fontSize: RFValue(14),
    fontWeight: '500',
    color: ColorSheet.PrimaryButton,
  },
  btnContainer: {
    width: '100%',
    height: hp(5.5),
    marginTop: hp(2),
    borderRadius: 15,
  },
  imageStyle: {
    width: wp(90),
    height: hp(25),
    marginTop: hp(2),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
