import { ColorSheet } from '@/utils/ColorSheet';
import { Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // width: wp(100),
  },
  imageBackground: {
    position: 'absolute',
    zIndex: -1,
    resizeMode: 'cover',
    width: wp(100),
    height: hp(100),
  },
  mainViewContainer: {
    width: wp(100),
    marginTop: Platform.OS == 'ios' ? hp(8) : hp(8),
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  scroll_container: {
    width: wp(100),
    paddingBottom: Platform.OS == 'ios' ? hp(18) : hp(18),
  },
  main_Container:{
    margin: hp(2),
    // backgroundColor: 'green'
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
    backgroundColor: ColorSheet.PrimaryButton
  },
  commonTextTitle: {
    fontSize: RFValue(13),
    fontWeight: '500',
    color: ColorSheet.PrimaryButtonTxt,
  },
  dropContainer: {
    marginTop: hp(2),
  },
  btnContainer: {
    marginTop: hp(3),
    height: hp(6),
  },
});
