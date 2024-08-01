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
  dashedBorder: {
    marginTop: hp(3),
    alignSelf: 'center',
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
