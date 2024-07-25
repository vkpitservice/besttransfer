import { ColorSheet } from '@/utils/ColorSheet';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  codeFieldRoot: {
    justifyContent: 'space-between',
  },
  cell: {
    width: wp(12),
    height: hp(5),
    borderBottomWidth: 1,
    borderColor: ColorSheet.OTPBorderColor,
    marginHorizontal: wp(1.5),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  focusCell: {
    borderColor: ColorSheet.PrimaryButton,
  },

  cellFilled: {
    borderColor: ColorSheet.PrimaryButton,
  },

  cellText: {
    fontSize: RFValue(16),
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: hp(0.5),
    color: ColorSheet.Primary,
  },
});
