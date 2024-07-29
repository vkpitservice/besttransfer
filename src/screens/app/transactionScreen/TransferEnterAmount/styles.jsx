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
  feesTotalPaymentContainer: {
    marginTop: hp(4),
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderBottomColor: ColorSheet.Primary,
    // backgroundColor: 'red'
  },
  exchangeFeeContainer: {
    height: hp(8),
  },
  row_exchange_fee_Container: {
    marginTop: hp(1),
    marginBottom: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowContainer: {
    height: hp(8),
    marginTop: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderBottomColor: ColorSheet.Primary,
    // backgroundColor: 'green'
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
