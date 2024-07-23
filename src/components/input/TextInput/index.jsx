import { Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { ColorSheet } from '../../../utils/ColorSheet';
import PropTypes from 'prop-types';

const TextInputField = (props) => {
  const {
    style,
    containerStyle,
    ErrorStyle,
    placeholder,
    value,
    onFocus,
    keyboardType,
    onBlur,
    onChangeText,
    secureTextEntry,
    editable,
    textError,
    autoCapitalize,
    icon,
  } = props;

  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.rootContainer, containerStyle]}>
      <TextInput
        style={[styles.textInput, style]}
        placeholder={placeholder}
        placeholderTextColor={ColorSheet.TextInputPlaceholderColor}
        value={value}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onEndEditing={() => {
          setFocused(false);
        }}
        keyboardType={keyboardType}
        onBlur={onBlur}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={editable}
        autoCapitalize={autoCapitalize}
      />
      {textError && <Text style={[styles.errorText, ErrorStyle]}> {textError} </Text>}
    </View>
  );
};

// Define prop types
TextInputField.propTypes = {
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  ErrorStyle: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onFocus: PropTypes.func,
  keyboardType: PropTypes.oneOf(['default', 'email-address', 'numeric', 'phone-pad', 'number-pad']),
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  editable: PropTypes.bool,
  textError: PropTypes.string,
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  icon: PropTypes.element,
};

// Define default props
TextInputField.defaultProps = {
  style: {},
  containerStyle: {},
  ErrorStyle: {},
  placeholder: '',
  value: '',
  onFocus: null,
  keyboardType: 'default',
  onBlur: null,
  onChangeText: null,
  secureTextEntry: false,
  editable: true,
  textError: '',
  autoCapitalize: 'none',
  icon: null,
};

export default TextInputField;
