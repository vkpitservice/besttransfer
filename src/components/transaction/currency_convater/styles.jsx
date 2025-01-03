import { ColorSheet } from '@/utils/ColorSheet';
import { Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  topContainer: {
    padding: wp(5),
    borderRadius: 20,
    borderColor: ColorSheet.Primary,
    borderWidth: 1,
    marginTop: hp(4),
    marginBottom: hp(2),
    // Change
    // height: Platform.OS == 'ios' ? 110 : 100,
    height: Platform.OS == 'ios' ? 180 : 170,
    justifyContent: 'center',
    // backgroundColor: 'yellow'
  },
  topContainerKyc: {
    padding: wp(5),
    borderRadius: 20,
    borderColor: ColorSheet.Primary,
    borderWidth: 1,
    marginTop: hp(0),
    marginBottom: hp(2),
    height: Platform.OS == 'ios' ? 180 : 170,
    justifyContent: 'center',
    // backgroundColor: 'yellow'
  },
  currencyInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: Platform.OS == 'ios' ? hp(3) : hp(3),
    // backgroundColor: 'red'
  },
  selectCurrencyView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(23),
    // backgroundColor: 'green'
  },
  currencyLabel: {
    color: ColorSheet.Primary,
    fontSize: RFValue(15),
    fontWeight: '400',
  },
  currencyInput: {
    flex: 1,
    marginRight: wp(5),
    color: ColorSheet.text5,
    fontSize: RFValue(15),
    fontWeight: '700',
  },

  selectCurrencyLogo: {
    width: wp(10),
    height: wp(10),
    borderRadius: 50,
    resizeMode: 'cover',
  },
  coveterView: {
    borderColor: ColorSheet.HorizontalLineColor,
    borderBottomWidth: 1.5,
    top: Platform.OS == 'ios' ? -hp(0.2) : -hp(0.3),
  },
  coveterButton: {
    backgroundColor: ColorSheet.Switch,
    position: 'absolute',
    top: -wp(4),
    alignSelf: 'center',
    borderRadius: 50,
    padding: wp(2),
  },
});
