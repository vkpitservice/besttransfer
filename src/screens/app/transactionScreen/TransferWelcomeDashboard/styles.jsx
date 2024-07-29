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
    marginTop: hp(8),
    alignSelf: 'center',
    // backgroundColor: 'pink',
  },
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
  savingRecievingContainer: {
    width: '100%',
    marginTop: hp(5),
    padding: hp(2),
    borderWidth: 1,
    borderRadius: hp(2),
  },
  horizontalContainer: {
    marginTop: hp(3),
  },
  horizontalLine: {
    width: '100%',
    borderWidth: 0.8,
    borderColor: ColorSheet.HorizontalLineColor,
  },
  rotateContainer: {
    position: 'absolute',
    zIndex: 1,
    top: -15,
    right: '45%',
    width: wp(9),
    height: wp(9),
    borderRadius: wp(4.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorSheet.PrimaryButton,
  },
  feesTotalPaymentContainer: {
    marginTop: hp(4),
    borderTopWidth: 2,
    borderStyle: 'dotted',
    borderBottomColor: ColorSheet.Primary,
    // backgroundColor: 'red'
  },
  rowContainer: {
    height: hp(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderStyle: 'dotted',
    borderBottomColor: ColorSheet.Primary,
  },
  text01: {
    fontSize: RFValue(14),
    fontWeight: '600',
    color: ColorSheet.Primary,
  },
  textAmount: {
    fontSize: RFValue(14),
    fontWeight: '500',
    color: ColorSheet.Primary,
  },
  btnContainer: {
    width: '100%',
    padding: hp(2),
    marginTop: hp(5),
    borderRadius: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ColorSheet.PrimaryButton,
    justifyContent: 'center',
  },
  buttonText: {
    paddingLeft: hp(1),
    fontSize: RFValue(15),
    fontWeight: '700',
    color: ColorSheet.PrimaryButtonTxt,
  },
});
