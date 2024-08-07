import { ColorSheet } from '@/utils/ColorSheet';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    fontSize: RFValue(15),
    color: ColorSheet.Text6,
    fontWeight: '600',
    alignItems: 'center',
    paddingTop: wp(4),
    // backgroundColor: 'pink'
    // paddingLeft: wp(1),
  },
  placeholder: {
    color: ColorSheet.Text6,
    fontWeight: '300',
    fontSize: RFValue(13),
    position: 'absolute',
  },
});

export default styles;
