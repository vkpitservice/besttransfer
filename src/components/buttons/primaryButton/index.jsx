import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

const PrimaryButton = (props) => {
  const { title, onPress, style } = props;

  return (
    <TouchableOpacity style={[styles.button_root, style]} onPress={onPress} activeOpacity={0.5}>
      <Text style={styles.title_txt}> {title} </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
