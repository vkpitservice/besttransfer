import { ColorSheet } from '@/utils/ColorSheet';
import { normalize } from '@/utils/scaling';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
    rootContainer: {
        width: '100%',
        borderRadius: hp(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(2),
        paddingVertical: hp(1),
        backgroundColor: ColorSheet.TextInputFieldColor
    },
    imgTxtContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    roundImage: {
        width: wp(9),
        height: hp(4),
        resizeMode: 'cover',
        borderRadius: hp(5),
        borderColor: ColorSheet.Primary,
        borderWidth: 1,
        marginLeft: hp(2),
        marginRight: hp(2),
        backgroundColor: 'red', // Temporarily add a background color
      },
    image: {
        width: wp(9),
        height: hp(4),
        resizeMode: 'cover',
        marginLeft: hp(2),
        marginRight: hp(2),
    },
    title: {
        fontSize: RFValue(13),
        color: ColorSheet.Primary,
        fontWeight: '700',
    },
    checkContainer: {
        width: wp(8),
        height: wp(8),
        borderRadius: wp(4),
        marginRight: hp(1),
        alignItems: 'center',
        borderColor: ColorSheet.CheckBox,
        borderWidth: 2,
        backgroundColor: ColorSheet.Secondary,
        justifyContent: 'center',
    },
});
