import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

const PrimaryButton = (props) => {
  const { title, onPress, style } = props;

  return (
    <TouchableOpacity style={[styles.button_root, style]} onPress={onPress} activeOpacity={0.5}>
      <Text style={styles.title_txt}> {title} </Text>
    </TouchableOpacity>
  );
};

// Define prop types
PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

// Define default props
PrimaryButton.defaultProps = {
  style: {},
};

export default PrimaryButton;
