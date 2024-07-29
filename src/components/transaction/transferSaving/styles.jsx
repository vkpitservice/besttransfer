import { ColorSheet } from '@/utils/ColorSheet';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  savingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  Text: {
    fontSize: RFValue(13),
    fontWeight: '200',
    color: ColorSheet.Text6,
  },
  Amount: {
    paddingTop: hp(1),
    fontSize: RFValue(15),
    fontWeight: '800',
    color: ColorSheet.Text6,
  },
  countryNameImageContainer: {
    width: wp(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'green'
  },
  countryName: {
    fontSize: RFValue(14),
    fontWeight: '500',
    color: ColorSheet.PrimaryTxt,
  },
  image: {
    width: wp(10),
    height: wp(10),
    resizeMode: 'cover',
    borderRadius: wp(5),
  },
});
