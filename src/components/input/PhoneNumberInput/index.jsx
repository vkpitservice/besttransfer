import {
  Animated,
  NativeSyntheticEvent,
  StyleProp,
  Image,
  Text,
  TextInputFocusEventData,
  View,
  ViewStyle,
  TextInput,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';
import Octicons from '@expo/vector-icons/Octicons';

import { ColorSheet } from '../../../utils/ColorSheet';

const PhoneNumberInput = (props) => {
  const {
    textInputStyle,
    placeholder,
    value,
    onFocus,
    onBlur,
    onChangeText,
    editable,
    containerStyle,
    autoCapitalize,
    testID,
    numberData,
    onChangeCode,
    code,
  } = props;

  const [inputValue, setInputValue] = useState(value || '');
  const [focused, setFocused] = useState(false);
  const [countryLogo, setCountryLogo] = useState('');
  const animationController = useRef(new Animated.Value(0)).current;
  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const toggleAnimate = () => {
    const config = {
      duration: 300,
      toValue: focused ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
  };

  useEffect(() => {
    const country = numberData?.find((item) => item.value == code);
    if (country) {
      setCountryLogo(country.label);
    } else {
      setCountryLogo(
        'https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png',
      );
    }
  }, [code, numberData]);

  const renderItem = (item) => {
    return (
      <View style={styles.dropdownItem}>
        <Text style={styles.dropdownText}>{item.label}</Text>
        {item.value == value && (
          <Octicons style={styles.icon} color={ColorSheet.PrimaryTxt} name='check' size={16} />
        )}
      </View>
    );
  };

  const rightIcon = () => {
    return (
      <Animated.View style={[styles.icon, { transform: [{ rotate: arrowTransform }] }]}>
        {/*         <DropDownIcon height={16} /> */}
      </Animated.View>
    );
  };

  return (
    <View style={[styles.rootContainer, containerStyle]}>
      <View
        style={[
          styles.textInputView,
          focused && {
            borderColor: ColorSheet.ActiveInputBorder,
          },
          textInputStyle,
        ]}
      >
        <View style={styles.imageView}>
          <Image source={{ uri: countryLogo }} style={styles.image} />
          <Dropdown
            data={numberData}
            style={styles.dropdown}
            placeholder=''
            selectedTextStyle={styles.selectedTextStyle}
            containerStyle={styles.dropdownContainerStyle}
            renderItem={renderItem}
            renderRightIcon={rightIcon}
            value={code}
            onChange={onChangeCode}
            labelField='label'
            valueField='value'
            onFocus={() => {
              setFocused(true);
              toggleAnimate();
            }}
            onBlur={() => {
              setFocused(false);
              toggleAnimate();
            }}
          />
        </View>
        {code && (
          <View style={styles.codeView}>
            <Text style={styles.code}>{code}</Text>
          </View>
        )}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={ColorSheet.TextInputFieldColor}
          value={inputValue}
          onFocus={(e: any) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onEndEditing={() => {
            setFocused(false);
          }}
          autoCapitalize={autoCapitalize}
          onBlur={onBlur}
          editable={editable}
          onChangeText={(text) => {
            setInputValue(text);
            onChangeText?.(text);
          }}
          keyboardType='phone-pad'
          style={styles.textInput}
          testID={testID}
        />
      </View>
    </View>
  );
};

export default PhoneNumberInput;
