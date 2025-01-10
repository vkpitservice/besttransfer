import React, { useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import styles from './styles';
import PropTypes from 'prop-types';

const AnimatedTextInput = (props) => {
  const { onChangeText, value, placeholder, style, placeholderStyle,editable,maxLength } = props;
  const [isFocused, setIsFocused] = useState(false);
  const placeholderPosition = useSharedValue(0);
  const fontSize = useSharedValue(RFValue(13));
  const [textInputValue, setTextInputValue] = useState(value);

  const animatedPlaceholderStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(placeholderPosition.value, { duration: 200 }),
          // size change
        },
      ],
      bottom: isFocused ? 5 : 0,

      fontSize: withTiming(fontSize.value, { duration: 200 }),
    };
  });

  const handleFocus = () => {
    setIsFocused(true);
    placeholderPosition.value = -20; // Move placeholder up
    fontSize.value = RFValue(11);
  };

  const handleBlur = () => {
    if (textInputValue === '') {
      setIsFocused(false);
      placeholderPosition.value = 0; // Move placeholder back to original position
      fontSize.value = RFValue(13);
    }
  };

  useEffect(() => {
    if (value !== '') {
      handleFocus();
    }
  }, [value]);

  const handleChangedText = (text) => {
    onChangeText && onChangeText(text);
    setTextInputValue(text);
  };

  return (
    <View style={[styles.container, style]}>
      <Animated.Text style={[styles.placeholder, placeholderStyle, animatedPlaceholderStyle]}>
        {placeholder}
      </Animated.Text>
      <TextInput
        style={styles.textInput}
        keyboardType='numeric'
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        editable={editable}
        defaultValue={`${value}`}
        maxLength={maxLength}
        onChangeText={handleChangedText}
      />
    </View>
  );
};

AnimatedTextInput.propTypes = {
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  placeholderStyle: PropTypes.object,
  maxLength:PropTypes.number
};

export default AnimatedTextInput;
