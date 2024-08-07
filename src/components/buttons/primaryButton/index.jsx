import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';
import { ColorSheet } from '../../../utils/ColorSheet';

const PrimaryButton = (props) => {
  const { title, onPress, style, loading } = props;

  return (
    <>
      {loading ?
        <TouchableOpacity style={[styles.button_root_disabled, style]} activeOpacity={0.5}>
          <Text style={styles.title_txt}> {title} </Text>
          <ActivityIndicator  size={'small'} color={ColorSheet.PrimaryButtonTxt}/>
        </TouchableOpacity>
        :
        <TouchableOpacity style={[styles.button_root, style]} onPress={onPress} activeOpacity={0.5}>
          <Text style={styles.title_txt}> {title} </Text>
        </TouchableOpacity>
      }
    </>
  );
};

// Define prop types
PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

export default PrimaryButton;
