import { TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ColorSheet } from '@/utils/ColorSheet';
import PropTypes from 'prop-types';

const Search = (props) => {
  const {
    style,
    containerStyle,
    placeholder,
    value,
    onFocus,
    keyboardType,
    onChangeText,
    onPressClose,
  } = props;

  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      <AntDesign name='search1' size={22} color={ColorSheet.PrimaryButton} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={ColorSheet.PrimaryButton}
        value={value}
        onChangeText={onChangeText}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onEndEditing={() => {
          setFocused(false);
        }}
        keyboardType={keyboardType}
      />
      {value?.length > 0 && (
        <TouchableOpacity activeOpacity={0.6} onPress={onPressClose}>
          <AntDesign
            name='closecircle'
            size={22}
            color={ColorSheet.PrimaryButton}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

// Define prop types
Search.propTypes = {
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  textInputField: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onFocus: PropTypes.func,
  keyboardType: PropTypes.oneOf(['default', 'email-address', 'numeric', 'phone-pad', 'number-pad']),
  onChangeText: PropTypes.func,
  editable: PropTypes.bool,
  onPressClose: PropTypes.func,
};

// Define default props
Search.defaultProps = {
  style: {},
  containerStyle: {},
  textInputField: {},
  placeholder: '',
  onFocus: null,
  keyboardType: 'default',
  onBlur: null,
  onChangeText: null,
  editable: true,
  onPressClose: null,
};

export default Search;
