import { ColorSheet } from '@/utils/ColorSheet';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    width: '93%',
    marginTop: hp(8),
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    // paddingLeft: hp(1),
  },
  title: {
    fontSize: RFValue(15),
    fontWeight: '700',
    color: ColorSheet.White,
    textAlign: 'center',
  },
  addIcon: {
    position: 'absolute',
    right: 0,
    // paddingRight: hp(1),
  },
});
