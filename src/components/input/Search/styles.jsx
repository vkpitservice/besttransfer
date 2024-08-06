import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ColorSheet } from '../../../utils/ColorSheet';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: '93%',
    height: hp(5),
    marginTop: hp(3),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: ColorSheet.PrimaryButtonTxt,
    borderRadius: 50,
    paddingHorizontal: wp(2),
  },
  icon: {
    marginLeft: hp(1),
    marginRight: hp(1),
  },
  input: {
    flex: 1,
    height: hp(3),
    fontSize: RFValue(12),
    fontWeight: '800',
    color: ColorSheet.PrimaryButton,
    // backgroundColor: 'red'
  },
  clearButton: {
    marginLeft: hp(3),
  },
});
