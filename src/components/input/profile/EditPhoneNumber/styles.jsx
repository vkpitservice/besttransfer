import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ColorSheet } from '@/utils/ColorSheet';

export const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
  },
  mainView: {
    width: '93%',
    marginTop: hp(3),
    flexDirection: 'row',
    // backgroundColor: ColorSheet.PrimaryButton,
    alignSelf: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: wp(10),
    height: wp(10),
    marginRight: hp(2),
    resizeMode: 'contain',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    height: hp(7),
    paddingLeft: hp(1),
    marginRight: hp(1),
    borderRadius: 10,
    backgroundColor: ColorSheet.TextInputFieldColor,
    borderColor: ColorSheet.ActiveInputBorder,
  },
  countryCode: {
    fontSize: RFValue(14),
    textAlign: 'center',
    // backgroundColor: 'red'
  },
  titleInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(7),
    paddingLeft: hp(1),
    borderRadius: 10,
    backgroundColor: ColorSheet.TextInputFieldColor,
    borderColor: ColorSheet.ActiveInputBorder,
  },
  textInput: {
    fontSize: RFValue(14),
    color: ColorSheet.Text0,
    paddingVertical: wp(1),
    fontWeight: '500',
  },
  placeholderTxt: {
    color: ColorSheet.PlaceholderText,
  },
  editIcon: {
    marginRight: wp(2),
  },
});
