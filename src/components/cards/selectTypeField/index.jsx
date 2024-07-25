import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ColorSheet } from '@/utils/ColorSheet';
import PropTypes from 'prop-types';
import { styles } from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SelectTypeFieldBox = (props) => {
  const { style, imageSource, onPress, isChecked, title, type } = props;

  // const [isHandleChecked, setHandleCheck] = useState(false);

  return (
    <View
      style={[
        styles.rootContainer,
        isChecked && {
          borderWidth: 1,
        },
        style,
      ]}
    >
      <View style={styles.imgTxtContainer}>
        {imageSource && <Image source={imageSource} style={styles.imgStyle} />}
        <Text style={styles.title}> {title} </Text>
      </View>

      <TouchableOpacity style={[styles.checkContainer]} onPress={onPress}>
        {isChecked && <FontAwesome5 name='check' size={15} color={ColorSheet.CheckBox} />}
      </TouchableOpacity>
    </View>
  );
};

// Define prop Type
SelectTypeFieldBox.propTypes = {
  style: PropTypes.object,
  imageSource: PropTypes.object,
  onPress: PropTypes.func,
  id: PropTypes.string,
  isChecked: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
};

// Define default props
SelectTypeFieldBox.defaultProps = {
  style: {},
  imageSource: null,
  onPress: null,
  id: '',
  isChecked: false,
  title: '',
  type: '',
};

export default SelectTypeFieldBox;
