import { Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';

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

export default TextInputField;
