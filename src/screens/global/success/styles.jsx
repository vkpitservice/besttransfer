import { ColorSheet } from '@/utils/ColorSheet';
import { normalize } from '@/utils/scaling';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  lottie_txt_container: {
    width: wp(55),
    marginTop: Platform.OS == 'ios' ? hp(20) : hp(30),
    alignItems: 'center',
  },
  lottieStyle: {
    width: wp(40),
    height: hp(18),
  },
  success_txt: {
    fontSize: RFValue(15),
    fontWeight: '800',
    color: ColorSheet.SuccessTxt,
  },

  buttonStyle: {
    width: wp(80),
    height: hp(6),
    marginTop: hp(17),
  },
});
