import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { ColorSheet } from '../../../utils/ColorSheet';
import PropTypes from 'prop-types';
import Octicons from 'react-native-vector-icons/Octicons';

const TextInputField = (props) => {
  const {
    style,
    containerStyle,
    textInputField,
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
    disableEyeIcon,
  } = props;

  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.rootContainer, style]}>
      <View
        style={[
          styles.mainView,
          focused && {
            borderWidth: 1,
          },
          containerStyle
        ]}
      >
        <TextInput
          style={[styles.textInput, textInputField]}
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
          secureTextEntry={secureTextEntry && showPassword}
          editable={editable}
          autoCapitalize={autoCapitalize}
        />
        {!disableEyeIcon && secureTextEntry && (
          <TouchableOpacity style={styles.icon} onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Octicons name='eye' size={20} color={ColorSheet.TextInputPlaceholderColor} />
            ) : (
              <Octicons name='eye-closed' size={20} color={ColorSheet.TextInputPlaceholderColor} />
            )}
          </TouchableOpacity>
        )}
      </View>

      {textError && <Text style={[styles.errorText, ErrorStyle]}> {textError} </Text>}
    </View>
  );
};

// Define prop types
TextInputField.propTypes = {
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  textInputField:PropTypes.object,
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
  disableEyeIcon: PropTypes.bool,
};

// Define default props
TextInputField.defaultProps = {
  style: {},
  containerStyle: {},
  textInputField: {},
  ErrorStyle: {},
  placeholder: '',
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
