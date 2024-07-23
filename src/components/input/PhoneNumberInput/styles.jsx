import { ColorSheet } from '@/utils/ColorSheet';
import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  rootContainer: {
    width: wp(100),
    padding: hp(1),
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: ColorSheet.TextInputFieldColor,
    borderRadius: hp(1),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    marginBottom: hp(1),
    // backgroundColor: ColorSheet.TextInputFieldColor,
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(10),
    height: hp(4),
    marginRight: hp(10),
    backgroundColor: 'red',
  },
  image: {
    width: wp(7),
    height: hp(3),
    resizeMode: 'cover',
    borderRadius: hp(6),
    position: 'absolute',
  },
  dropdown: {
    width: '100%',
    paddingLeft: hp(4),
    backgroundColor: 'green',
  },
  placeholderStyle: {
    fontSize: RFValue(12),
    color: ColorSheet.TextInputFieldColor,
  },
  selectedTextStyle: {
    fontSize: RFValue(12),
    // backgroundColor: 'green',
  },
  inputSearchStyle: {
    height: hp(4),
    fontSize: RFValue(12),
  },
  iconStyle: {
    backgroundColor: 'red',
  },
  icon: {
    backgroundColor: 'red',
  },
  dropdownItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
  },
  dropdownText: {
    fontSize: RFValue(14),
    color: ColorSheet.PrimaryTxt,
  },
  codeView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -hp(10),
    backgroundColor: 'blue',
  },
  code: {
    fontSize: RFValue(13),
    color: ColorSheet.TextInputFieldColor,
  },
  textInput: {
    fontSize: RFValue(12),
    marginLeft: hp(3),
    color: ColorSheet.TextInputFieldColor,
  },
});
