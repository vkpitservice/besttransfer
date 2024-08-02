import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import { ColorSheet } from '@/utils/ColorSheet';
import { styles } from './styles';

const SecondaryButton = (props) => {
  const { title, onPress, style } = props;

  return (
    <TouchableOpacity style={[styles.button_root, style]} onPress={onPress} activeOpacity={0.5}>
      {/* Icon */}
      <FontAwesome name='send' size={20} color={ColorSheet.PrimaryButtonTxt} />

      <Text style={styles.title_txt}> {title} </Text>
    </TouchableOpacity>
  );
};

// Define prop types
SecondaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

export default SecondaryButton;
