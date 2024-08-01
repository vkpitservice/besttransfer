import { ColorSheet } from '@/utils/ColorSheet';
import { Dimensions, Platform, StyleSheet } from 'react-native';
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
    marginTop: hp(5),
    marginBottom: hp(2),
    height: hp(22),
    justifyContent: 'center',
  },
  currencyInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: hp(4),
  },
  selectCurrencyView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(23),
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
    top: -hp(0.5),
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
