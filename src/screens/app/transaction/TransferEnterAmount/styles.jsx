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
    resizeMode: 'stretch',
    width: wp(100),
    height: Platform.OS == 'ios' ? hp(100) : hp(105),
  },
  CurrencyCoveterContainer: {
    marginTop: hp(2),
  },
  mainContainer: {
    width: wp(90),
    paddingBottom: hp(2),
    marginTop: hp(8),
    alignSelf: 'center',
    // backgroundColor: 'pink',
  },
  dashedBorderView: {
    height: hp(2),
    width: wp(100),
    alignItems: 'center',
  },
  dashedBorder: {
    marginTop: hp(3),
    alignSelf: 'center',
    marginVertical: hp(2),
    // marginBottom: hp(2),
  },
  row_exchange_fee_Container: {
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowContainer: {
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    height: hp(6),
    marginTop: hp(4),
  },
});
