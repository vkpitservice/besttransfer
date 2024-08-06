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
  titleHeaderContainer: {
    marginTop: Platform.OS == 'android' ? hp(6) : hp(8),
  },
  imageBackground: {
    position: 'absolute',
    zIndex: -1,
    resizeMode: 'cover',
    width: wp(100),
    height: hp(100),
  },
  mainViewContainer: {
    width: '100%',
    margin: hp(2),
    marginTop: Platform.OS == 'ios' ? hp(8) : hp(8),
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
  main_Container: {
    width: '100%',
    height: hp(100),
    alignSelf: 'center',
    // backgroundColor: 'green'
  },
  scroll_container: {
    width: wp(100),
    // paddingBottom: Platform.OS == 'ios' ? hp(5) : hp(5),
    // backgroundColor: 'red',
  },
  btnContainer: {
    width: '93%',
    height: hp(6),
    marginTop: hp(8),
    alignSelf: 'center',
  },
});
