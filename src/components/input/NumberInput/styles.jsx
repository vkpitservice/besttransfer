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
  root: {
    backgroundColor: ColorSheet.TextInputFieldColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1.5),
    borderRadius: 10,
    width: wp(95),
  },
  countryLogo: {
    width: wp(7),
    height: wp(7),
    marginLeft: wp(2),
    resizeMode: 'cover',
    borderRadius: 50,
  },
  dropdown: {
    width: wp(20),
  },
  icon: {
    marginRight: 5,
  },
  downIcon: {
    marginRight: wp(1),
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
  },
  textItem: {
    flex: 1,
    fontSize: RFValue(14),
    color: ColorSheet.Text2,
    fontWeight: '500',
  },
  placeholderStyle: {
    fontSize: RFValue(14),
    color: ColorSheet.Text2,
    marginLeft: wp(2),
    fontWeight: '500',
  },
  selectedTextStyle: {
    fontSize: RFValue(14),
    color: ColorSheet.Text2,
    marginLeft: wp(2),
    fontWeight: '500',
  },
  iconStyle: {},
  containerStyle: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    marginLeft: -wp(8),
    marginTop: hp(2),
    width: wp(93),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    borderColor: ColorSheet.CheckBox,
    borderBottomWidth: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: RFValue(14),
    color: ColorSheet.Text2,
    fontWeight: '500',
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
  },
  textInput: {
    flex: 1,
    fontSize: RFValue(14),
    color: ColorSheet.Text2,
    fontWeight: '500',
    paddingRight: wp(2),
    marginLeft: wp(1),
  },
});
