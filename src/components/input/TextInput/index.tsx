import { KeyboardTypeOptions, NativeSyntheticEvent, StyleProp, StyleSheet, Text, TextInput, TextInputFocusEventData, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';

interface TextInputFieldProps {
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  ErrorStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  value?: string;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  editable?: boolean;
  textError?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  icon?: JSX.Element;
}

const TextInputField = (props: TextInputFieldProps) => {
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
        icon
    } = props

    const [focused, setFocused] = useState<boolean>(false);

  return (
    <View style = {[styles.rootContainer, containerStyle]}>
      <TextInput 
        style = {[styles.textInput, style]} 
        placeholder = {placeholder} 
        value = {value} 
        onFocus = {(e) => {
            setFocused(true)
            onFocus?.(e)
        }} 
        onEndEditing={() => {
            setFocused(false);
        }}
        keyboardType = {keyboardType} 
        onBlur = {onBlur} 
        onChangeText = {onChangeText} 
        secureTextEntry = {secureTextEntry} 
        editable = {editable} 
        autoCapitalize = {autoCapitalize} 
      />
      {textError &&
        (
            <Text style={[styles.errorText, ErrorStyle]}> {textError} </Text>
        )
      }
    </View>
  )
}

export default TextInputField;