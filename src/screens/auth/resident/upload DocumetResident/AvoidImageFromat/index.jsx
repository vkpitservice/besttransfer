import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ColorSheet } from '@/utils/ColorSheet';
import PropTypes from 'prop-types';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const AvoidImageFormat = (props) => {
  const { name, title } = props;
  return (
    <View style={styles.root}>
      <SimpleLineIcons name={'close'} color={ColorSheet.Error} size={24} />
      <Text style={styles.titleTxt}> {title} </Text>
    </View>
  );
};

AvoidImageFormat.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};

AvoidImageFormat.defaultProps = {
  name: '',
  title: '',
};

export default AvoidImageFormat;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingVertical: hp(1),
    alignItems: 'center',
  },
  titleTxt: {
    paddingLeft: hp(1),
    fontSize: RFValue(12),
  },
});
