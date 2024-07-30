import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ColorSheet } from '../../../utils/ColorSheet';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ColorSheet.Secondary,
    // marginVertical: hp(1),
  },
  imageStyle: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    resizeMode: 'contain',
  },
  placeholderImageStyle: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    backgroundColor: '#D3D3D3', // Replace with your desired background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: RFValue(12),
    color: ColorSheet.Text0,
    fontWeight: 'bold',
  },
  txtRowContainer: {
    marginLeft: hp(1),
    // backgroundColor: 'pink'
  },
  nameTxt: {
    fontSize: RFValue(12),
    color: ColorSheet.Text0,
    fontWeight: 'bold',
  },
  numberTxt: {
    paddingTop: hp(0.5),
    fontSize: RFValue(12),
    color: ColorSheet.CheckBox,
    fontWeight: '500',
  },
});
