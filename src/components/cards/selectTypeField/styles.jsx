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
  rootContainer: {
    width: '100%',
    borderRadius: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    backgroundColor: ColorSheet.TextInputFieldColor,
  },
  imgTxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgStyle: {
    width: wp(9),
    height: hp(4),
    // resizeMode: 'cover',
    marginLeft: hp(1),
    marginRight: hp(1),
  },
  title: {
    fontSize: RFValue(13),
    color: ColorSheet.Primary,
    fontWeight: '400',
  },
  checkContainer: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(4),
    marginRight: hp(1),
    alignItems: 'center',
    borderColor: ColorSheet.CheckBox,
    borderWidth: 2,
    backgroundColor: ColorSheet.Secondary,
    justifyContent: 'center',
  },
});
