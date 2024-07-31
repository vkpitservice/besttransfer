import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import PropTypes from 'prop-types';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ColorSheet } from '@/utils/ColorSheet';

const ShowImage = (props) => {
  const { imageSource, onPress } = props;
  return (
    <View style={styles.selectBorder_Close_Container}>
      <TouchableOpacity style={styles.closeIcon} activeOpacity={0.5} onPress={onPress}>
        <SimpleLineIcons name={'close'} color={ColorSheet.Error} size={18} />
      </TouchableOpacity>

      <Image source={imageSource} style={styles.imgStyle} />
    </View>
  );
};

// Define prop types
ShowImage.propTypes = {
  imageSource: PropTypes.object,
  onPress: PropTypes.func,
};

// Define default props
ShowImage.defaultProps = {
  imageSource: {},
  onPress: () => {},
};

export default ShowImage;

const styles = StyleSheet.create({
  selectBorder_Close_Container: {
    width: wp(36),
    height: hp(13),
    borderRadius: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: ColorSheet.PrimaryButton,
    borderWidth: 0.5,
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: -1,
    // backgroundColor: ColorSheet.Error,
  },
  imgStyle: {
    width: wp(30),
    height: hp(8),
    resizeMode: 'contain',
  },
});
