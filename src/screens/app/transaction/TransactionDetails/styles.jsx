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
  roundIconContainer: {
    marginTop: Platform.OS == 'android' ? hp(6) : hp(6),
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    backgroundColor: ColorSheet.PrimaryButton,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageMain: {
    marginTop: Platform.OS == 'android' ? hp(13) : hp(16),
    position: 'absolute',
    zIndex: -1,
    resizeMode: 'cover',
    // width: wp(100),
    width: '100%',
    // alignSelf: 'center',
    height: Platform.OS == 'android' ? '88%' : '84%',
  },
  boxContainer: {
    marginTop: Platform.OS == 'android' ? hp(2) : hp(1),
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: Platform.OS == 'android' ? RFValue(16) : RFValue(14),
    fontWeight: 'bold',
    color: ColorSheet.Text0,
  },
  horizontalLine: {
    width: wp(80),
    height: 1,
    marginTop: hp(2),
    marginBottom: hp(2),
    backgroundColor: ColorSheet.HorizontalLineColor,
  },
  totalPayment: {
    fontSize: Platform.OS == 'android' ? RFValue(15) : RFValue(13),
    fontWeight: '400',
    color: ColorSheet.Text8,
  },
  totalAmount: {
    paddingTop: hp(1),
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: ColorSheet.Text0,
  },
  detailsBox: {
    width: wp(80),
    marginTop: hp(1),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    width: wp(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red'
  },
  dataBoxStyle: {
    width: '48%',
    height: hp(9),
    marginBottom: hp(1.5),
  },
  reciepientIconContainer: {
    width: wp(80),
    marginBottom: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  roundContainer: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    backgroundColor: ColorSheet.PrimaryButton,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reciepientTxt: {
    paddingLeft: wp(2),
    fontSize: RFValue(14),
    fontWeight: '500',
    color: ColorSheet.Text0,
  },
  countryContainer: {
    width: '100%',
    height: hp(8.5),
    marginBottom: hp(2),
  },
});
