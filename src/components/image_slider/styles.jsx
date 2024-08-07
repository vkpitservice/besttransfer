import { ColorSheet } from '@/utils/ColorSheet';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    backgroundColor: ColorSheet.PrimaryButton,
    width: wp(90),
    alignItems: 'center',
    marginTop: hp(2),
    height: hp(28),
    paddingTop: hp(0.8),
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: hp(23),
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',

    alignSelf: 'center',
    marginTop: hp('1%'),
    position: 'absolute',
    bottom: hp(1),
  },

  dot: {
    width: hp(1.5),
    height: hp(1.5),
    borderRadius: 50,
    backgroundColor: ColorSheet.Dot,
    marginHorizontal: wp('1%'),
  },

  active_dot: {
    width: wp(10),
    height: hp(1.5),
    borderRadius: 50,
    backgroundColor: ColorSheet.ActiveIcon,
    marginHorizontal: wp('1%'),
  },
});
