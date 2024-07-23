import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ColorSheet } from '../../../utils/ColorSheet';
import { normalize } from '../../../utils/scaling';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '',
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: normalize(17),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: RFValue(14),
  },
  placeholderStyle: {
    fontSize: RFValue(16),
    color: ColorSheet.White,
    marginLeft: normalize(10),
  },
  selectedTextStyle: {
    color: ColorSheet.White,
    fontFamily: 'Roboto_400Regular',
    fontSize: RFValue(16),
    marginLeft: normalize(10),
  },
  iconStyle: {},
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
