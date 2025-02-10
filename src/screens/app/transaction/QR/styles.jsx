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
  mainContainer: {
    width: wp(90),
    marginTop: hp(4),
    alignSelf: 'center',
    justifyContent:'center',
    alignItems: 'center'
    // backgroundColor: 'pink',
  },
  flatListContainer: {
    paddingBottom: hp(26),
  },
  btnContainer:{
    width: '100%',
    height: Platform.OS == 'ios' ? hp(5.5) : hp(6),
    marginTop: hp(2),
    borderRadius: 15
  },
  paymentProcessingText:{
    fontSize: (30),
    fontWeight:'bold',
    color:ColorSheet.PrimaryButton
},
  successTick: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop:hp(20)
  },
  detailsBlock: { width: '95%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  subTitleText: {
    fontSize: RFValue(12),
    fontWeight: '600',
    color: ColorSheet.Primary,
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    // width: wp(100),
  },
  scroll_container: {
    width: wp(100),
    paddingBottom: Platform.OS == 'ios' ? hp(18) : hp(15),
  },
  titleHeaderContainer: {
    marginTop: Platform.OS == 'android' ? hp(8) : hp(10),
  },
  imageBackground: {
    position: 'absolute',
    zIndex: -1,
    resizeMode: 'stretch',
    width: wp(100),
    height: hp(100),
  },
  main_Container: {
    margin: hp(2),
    // width: wp(100),
    marginTop: Platform.OS == 'ios' ? hp(8) : hp(10),
    // paddingBottom: Platform.OS == 'ios' ? hp(10) : hp(8),
  },
  payment_type_block: {
    padding: 20,
    borderColor: ColorSheet.PrimaryButton,
    borderWidth: 1.5,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  transferDetailsContainer: {
    marginBottom: hp(3),
    backgroundColor: ColorSheet.TextInputFieldColor,
  },
  rowContainer: {
    padding: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(1),
    backgroundColor: ColorSheet.PrimaryButton,
  },
  commonTextTitle: {
    fontSize: RFValue(13),
    fontWeight: '500',
    color: ColorSheet.PrimaryButtonTxt,
  },
  dropContainer: {
    marginTop: hp(2),
  },
});
