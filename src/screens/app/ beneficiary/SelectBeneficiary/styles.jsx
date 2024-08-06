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
  scroll_container: {
    width: wp(100),
    alignItems: 'center',
    paddingBottom: Platform.OS == 'ios' ? hp(18) : hp(18),
  },
  imageBackground: {
    position: 'absolute',
    zIndex: -1,
    resizeMode: 'stretch',
    width: wp(100),
    height: hp(100),
  },
  mainContainer: {
    width: wp(100),
    height: hp(60),
    marginTop: Platform.OS == 'ios' ? hp(8) : hp(8),
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  CardContainer: {
    width: wp(90),
    height: hp(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(3),
    padding: hp(1),
    borderRadius: 10,
    backgroundColor: ColorSheet.Secondary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.84,

    elevation: 1,
  },
  iconContainer: {
    width: wp(7),
    height: wp(7),
    borderRadius: wp(3.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorSheet.PrimaryButtonTxt,
  },
  title: {
    fontSize: RFValue(14),
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
