import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ColorSheet } from '../../../utils/ColorSheet';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    marginVertical: hp(2),
  },
  imgContainer: {
    width: wp(18),
    // backgroundColor: 'red'
  },
  imageTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: hp(8),
    height: hp(8),
    resizeMode: 'cover',
    borderRadius: hp(4),
  },
  svgContainer: {
    width: wp(7),
    height: wp(7),
    borderRadius: wp(3.5),
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: ColorSheet.Secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameDateContainer: {
    marginLeft: wp(2),
    flexDirection: 'column',
    // backgroundColor: 'red'
  },
  nameTxt: {
    fontSize: RFValue(15),
    fontWeight: '500',
    color: ColorSheet.Primary,
  },
  dateTxt: {
    paddingTop: hp(0.5),
    fontSize: RFValue(13),
    fontWeight: '500',
    color: ColorSheet.Text3,
  },
  amountTxt: {
    fontSize: RFValue(15),
    fontWeight: '500',
    color: ColorSheet.Primary,
  },
});
