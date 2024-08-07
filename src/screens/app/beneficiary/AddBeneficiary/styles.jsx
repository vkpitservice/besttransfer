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
    width: wp(100),
  },
  imageBackground: {
    position: 'absolute',
    zIndex: -1,
    resizeMode: 'cover',
    width: wp(100),
    height: hp(100),
  },
  mainViewContainer: {
    flex: 1,
    // width: wp(100),
    marginTop: Platform.OS == 'ios' ? hp(8) : hp(8),
    // backgroundColor: 'red',
  },
  scroll_container: {
    width: wp(100),
    paddingBottom: Platform.OS == 'ios' ? hp(3) : hp(3),
  },
  main_Container:{
    margin: hp(2),
    paddingBottom: Platform.OS == 'ios' ? hp(12) : hp(8),
    // backgroundColor: 'green'
  },
  title: {
    fontSize: RFValue(14),
    fontWeight: '400',
    marginBottom: hp(3),
  },
  inputContainer: {
    marginTop: hp(3),
    backgroundColor: ColorSheet.TextInputFieldColor
  },
  btnContainer: {
    marginTop: hp(3),
    height: hp(6),
  },
});
