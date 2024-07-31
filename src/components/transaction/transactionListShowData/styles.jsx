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
  imageTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: wp(12),
    height: wp(12),
    resizeMode: 'cover',
    borderRadius: hp(6),
  },
  svgContainer: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
    position: 'absolute',
    right: -6,
    bottom: -6,
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
    fontSize: RFValue(13),
    fontWeight: '600',
    color: ColorSheet.Text7,
  },
  dateTxt: {
    paddingTop: hp(0.5),
    fontSize: RFValue(12),
    fontWeight: '500',
    color: ColorSheet.Text3,
  },
  amountTxt: {
    fontSize: RFValue(13),
    fontWeight: '600',
    color: ColorSheet.Text7,
  },
});
