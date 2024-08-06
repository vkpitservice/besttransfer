import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Feather from '@expo/vector-icons/Feather';
import { ColorSheet } from '@/utils/ColorSheet';
import { styles } from './styles';

const EditPhoneTextInput = (props) => {
  const {
    style,
    containerStyle,
    textInputField,
    imageSource,
    placeholder,
    code,
    value,
    onFocus,
    keyboardType,
    onBlur,
    onChangeText,
    editable,
    onPressEdit,
    autoCapitalize,
  } = props;

  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.rootContainer, style]}>
      {/* Input Container */}
      <View
        style={[
          styles.mainView,
          focused && {
            borderWidth: 1,
            borderColor: ColorSheet.ActiveInputBorder,
          },
          containerStyle,
        ]}
      >
        <View style={styles.countryCodeContainer}>
          {/* Image */}
          <Image source={imageSource} style={styles.imgStyle} />
          {/* Country Code */}
          <Text style={styles.countryCode}>{code}</Text>
        </View>

        <View style={styles.titleInputContainer}>
          {/* TextInput */}
          <TextInput
            style={[styles.textInput, textInputField]}
            placeholder={placeholder}
            placeholderTextColor={ColorSheet.PlaceholderText}
            value={value}
            onChangeText={onChangeText}
            onFocus={(e) => {
              setFocused(true);
              onFocus?.(e);
            }}
            onEndEditing={() => {
              setFocused(false);
            }}
            onBlur={onBlur}
            keyboardType={keyboardType}
            editable={editable}
            autoCapitalize={autoCapitalize}
          />
          {/* EditIcon */}
          {editable && onPressEdit && (
            <TouchableOpacity style={styles.editIcon} activeOpacity={0.5} onPress={onPressEdit}>
              <Feather name='edit' size={26} color={ColorSheet.Text5} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

EditPhoneTextInput.propTypes = {
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  imageSource: PropTypes.object,
  textInputField: PropTypes.object,
  placeholder: PropTypes.string,
  code: PropTypes.string,
  value: PropTypes.string,
  onFocus: PropTypes.func,
  keyboardType: PropTypes.oneOf(['default', 'email-address', 'numeric', 'phone-pad', 'number-pad']),
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  editable: PropTypes.bool,
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  onPressEdit: PropTypes.func,
};

export default EditPhoneTextInput;
