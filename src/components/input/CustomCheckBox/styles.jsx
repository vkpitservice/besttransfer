import { ColorSheet } from '@/utils/ColorSheet';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: ColorSheet.CheckBox,
    borderRadius: 5,
    borderWidth: 2,
    width: wp(6),
    height: wp(6),
    justifyContent: 'center',
  },
});

export default styles;
