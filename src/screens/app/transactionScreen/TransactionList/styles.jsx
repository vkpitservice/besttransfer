import { ColorSheet } from '@/utils/ColorSheet';
import { Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: wp(100),
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    resizeMode: 'cover',
    width: wp(100),
    height: hp(100),
  },
  mainContainer: {
    width: wp(90),
    marginTop: hp(6),
    alignSelf: 'center',
    // backgroundColor: 'pink',
  },
  flatListContainer: {
    paddingBottom: Platform.OS == 'android' ? hp(10) : hp(12),
  },
});
