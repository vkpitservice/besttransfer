import { ColorSheet } from '@/utils/ColorSheet';
import { Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    rowExchangeContainer: {
        padding: hp(1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: hp(1),
    },
    TextTitle: {
        fontSize: RFValue(13),
        fontWeight: '500',
        color: ColorSheet.Primary,
    },
    TextAmount: {
        fontSize: RFValue(13),
        fontWeight: '500',
        color: ColorSheet.Primary,
    },
});
