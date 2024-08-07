import { ColorSheet } from '@/utils/ColorSheet';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  rootBox: {
    width: '100%',
    marginTop: hp(2),
    padding: hp(2),
    borderWidth: 1,
    borderRadius: hp(2),
  },
  savingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  Text: {
    fontSize: RFValue(12),
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
  horizontalContainer: {
    marginTop: hp(2),
    position: 'relative',
  },
  horizontalLine: {
    width: '100%',
    borderWidth: 1,
    borderColor: ColorSheet.HorizontalLineColor,
  },
  rotateContainer: {
    position: 'absolute',
    zIndex: 1,
    top: -15,
    right: '45%',
    width: wp(9),
    height: wp(9),
    borderRadius: wp(4.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorSheet.PrimaryButton,
  },
  recievingContainer: {
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
  },
});
