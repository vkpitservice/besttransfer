import { Platform, StyleSheet } from 'react-native';
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
    resizeMode: 'stretch',
    width: wp(100),
    height: Platform.OS == 'ios' ? hp(100) : hp(105),
  },
  mainContainer: {
    width: wp(90),
    marginTop: hp(5),
    alignSelf: 'center',
    justifyContent:'center',
    alignItems: 'center'
    // backgroundColor: 'pink',
  },
  flatListContainer: {
    paddingBottom: hp(26),
  },
  btnContainer:{
    width: '100%',
    height: Platform.OS == 'ios' ? hp(5.5) : hp(6),
    marginTop: hp(2),
    borderRadius: 15
  }
});
