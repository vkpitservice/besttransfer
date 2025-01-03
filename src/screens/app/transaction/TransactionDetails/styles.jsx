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
  mainScreenContainer: {
    flex: 1,
    marginTop: hp(8),
    // backgroundColor: 'red',
  },
  scroll_container: {
    width: wp(100),
    paddingBottom: Platform.OS == 'android' ? hp(22) : hp(20),
    alignItems: 'center',
  },
  roundIconContainer: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    // backgroundColor: ColorSheet.PrimaryButton,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageMain: {
    position: 'absolute',
    zIndex: -1,
  },
  titleStyle: {
    paddingTop: hp(1),
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
    width: wp(83),
    marginTop: hp(2),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'green'
  },
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    padding:10
    // backgroundColor: 'red'
  },
  dataBoxStyle: {
    width: '48%',
    height: hp(9),
  },
  reciepientIconContainer: {
    // change here
    width: wp(83),
    // marginBottom: hp(1),
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
  },
});
