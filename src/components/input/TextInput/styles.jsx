import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ColorSheet } from '../../../utils/ColorSheet';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    // backgroundColor: 'red'
  },
  mainView: {
    flexDirection: 'row',
    backgroundColor: ColorSheet.TextInputFieldColor,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    borderColor: ColorSheet.ActiveInputBorder,
  },
  textInput: {
    fontSize: RFValue(14),
    color: ColorSheet.TextInputPlaceholderColor,
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
    fontWeight: '500',
    flex: 1,
  },
  icon: {
    marginRight: wp(2),
  },
  errorText: {
    fontSize: RFValue(12),
    color: ColorSheet.Error,
  },
});
