import { ColorSheet } from '@/utils/ColorSheet';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: ColorSheet.backGroundColor,
  },
  scroll_container: {
    flexGrow: 1,
    paddingBottom: hp(5),
  },
  main_container: {
    // width: '100%',
    margin: hp(2),
    // height: hp(70),
    marginTop: Platform.OS == 'android' ? hp(10) : hp(2),
    alignSelf: 'center',
    // backgroundColor: 'pink',
  },
  logo_image: {
    paddingTop: hp(2),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 10, // Ensures shadow effect on Android
  },
  statusStyleContainer: {
    flexDirection: 'row',
    marginTop: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: wp(80),
    marginTop: hp(3),
    marginBottom: hp(4),
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: 'red'
  },
  firstText: {
    fontSize: RFValue(13),
    fontWeight: '700',
    color: ColorSheet.Primary,
  },
  secondText: {
    paddingTop: hp(1),
    fontSize: RFValue(12),
    fontWeight: '700',
    color: ColorSheet.Primary,
  },
  dropdownTitle: {
    fontSize: RFValue(13),
    fontWeight: '500',
    color: ColorSheet.Primary,
  },
  start: {
    fontSize: RFValue(12),
    fontWeight: '700',
    color: ColorSheet.StarColor,
  },
  verificationTitle: {
    fontSize: RFValue(13),
    fontWeight: '500',
    color: ColorSheet.Primary,
    paddingBottom: hp(1),
  },
  listType: {
    marginTop: hp(1.5),
    height: hp(5),
    // marginBottom: hp(1.5),
  },
  dropdownStyle: {
    // width: wp(100),
    height: hp(6),
    marginTop: hp(1.5),
    marginBottom: hp(3),
  },
  listContainer: {
    marginBottom: hp(3),
  },
  urlTextContainer: {
    width: wp(70),
    marginVertical: hp(1), // Vertical spacing around URL text
    // backgroundColor: 'red',
  },
  urlText: {
    fontSize: RFValue(12),
    fontWeight: '500',
    color: ColorSheet.UrlTextColor,
    textDecorationLine: 'underline',
  },

  buttonImgContainer: {
    position: 'absolute',
    bottom: 0,
    width: wp(100),
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: 'red',
    paddingBottom: hp(0.5), // Padding for space at the bottom
    backgroundColor: ColorSheet.Secondary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.4,

    elevation: 2,
  },
  buttonStyle: {
    width: wp(90),
    marginTop: hp(2),
  },
  imageStyle: {
    width: wp(50),
    height: hp(6),
    resizeMode: 'contain',
    marginTop: hp(1),
    // backgroundColor: 'green'
  },
});
