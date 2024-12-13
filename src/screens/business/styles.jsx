import { ColorSheet } from '@/utils/ColorSheet';
import { Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  leftblock:{width:'50%',justifyContent:'flex-start',alignItems:'flex-start'},
  rightblock:{width:'50%',justifyContent:'flex-end',alignItems:'flex-end'},
  selectedOfficerText: {
    fontSize: (11),
    fontWeight: 'bold',
  },
  selectedOfficerHeading: {
    fontSize: (13),
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedOfficer: {
    borderWidth: 2,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 5, borderRadius: 10,
    borderColor: ColorSheet.buttonChose
  },
  unSelectedOfficer: {
    borderWidth: 2,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 5, borderRadius: 10
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: hp(2)
  },
  dropdownButtonStyle: {
    width: wp(90),
    height: 55,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
    width: wp(90),
    marginTop: hp(2),
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: wp(100),
    backgroundColor: ColorSheet.backGroundColor,
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    resizeMode: 'stretch',
    width: wp(100),
    height: hp(55),
  },
  scroll_container: {
    width: wp(100),
    paddingBottom: hp(5),
  },

  logo_container: {
    marginTop: Platform.OS == 'android' ? hp(5) : hp(6),
    alignItems: 'center',
  },
  main_container: {
    marginTop: hp(4),
    alignItems: 'center',
  },
  titleText: {
    fontSize: RFValue(16),
    fontWeight: '700',
    color: ColorSheet.PrimaryTxt,
  },
  subTitleText: {
    fontSize: RFValue(12),
    fontWeight: '600',
    color: ColorSheet.Text3,
    padding: 10,
  },

  companyName: {
    width: wp(80),
    marginTop: hp(2),
    // backgroundColor: 'yellow',
  },
  email_Field: {
    width: wp(90),
    marginTop: hp(2),
    // backgroundColor: 'yellow',
  },
  password_Field: {
    width: wp(90),
    marginTop: hp(2),
    // backgroundColor: 'red',
  },
  rememberView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(90),
    marginTop: hp(4),
    alignItems: 'center',
  },
  rememberLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberLeftText: {
    fontSize: RFValue(13),
    color: ColorSheet.Text1,
    marginLeft: wp(2),
    fontWeight: '500',
  },
  forgetPinButton: {},
  forgetPinText: {
    fontSize: RFValue(13),
    color: ColorSheet.Text1,
    marginLeft: wp(2),
    fontWeight: '500',
  },
  searchIcon: {
    height: hp(5),
    marginLeft: 5
  },
  buttonStyle: {
    width: wp(90),
    height: hp(6),
    marginTop: hp(6),
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(4),
  },
  footerText: {
    fontSize: RFValue(13),
    color: ColorSheet.PrimaryTxt,
    fontWeight: '600',
  },
  registerButton: {
    marginLeft: wp(1),
  },
  registerButtonText: {
    fontSize: RFValue(13),
    color: ColorSheet.PrimaryTxt,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
