import { Platform, StyleSheet } from 'react-native';
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
    width: wp(100),
  },
  scroll_container: {
    width: wp(100),
    paddingBottom: Platform.OS == 'ios' ? hp(18) : hp(18),
  },
  imageBackground: {
    position: 'absolute',
    zIndex: -1,
    resizeMode: 'cover',
    width: wp(100),
    height: Platform.OS == 'ios' ? hp(100) : hp(105),
  },
  mainContainer: {
    flex: 1,
    marginTop: Platform.OS == 'ios' ? hp(6) : hp(8),
  },
  sectionHeader: {
    fontSize: RFValue(14),
    fontWeight: '400',
    marginLeft: hp(1),
    marginBottom: hp(1),
  },
});
