import { ColorSheet } from '@/utils/ColorSheet';
import { Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  placeholderImageStyle: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    backgroundColor: '#D3D3D3', // Replace with your desired background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: RFValue(18),
    color: ColorSheet.Text0,
    fontWeight: 'bold',
  },
  root: {
    width: '93%',
    marginTop: Platform.OS == 'android' ? hp(8) : hp(9),
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageNameContainer: {
    flexDirection: 'row',
    // backgroundColor: 'green'
  },
  NameContainer: {
    marginLeft: wp(3),
    justifyContent: 'center',
  },
  image: {
    width: wp(14),
    height: wp(14),
    resizeMode: 'cover',
    borderRadius: wp(7),
  },
  welcomeText: {
    fontSize: RFValue(14),
    fontWeight: '700',
    color: ColorSheet.Secondary,
    // marginLeft: wp(2),
  },
  nameText: {
    paddingTop: hp(0.3),
    fontSize: RFValue(12),
    fontWeight: '500',
    color: ColorSheet.Secondary,
  },
  iconContainer: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(6),
    backgroundColor: ColorSheet.PrimaryButtonTxt,
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: wp(2),
  },
});
