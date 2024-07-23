import React, { useRef, useState } from 'react';
import { View, Text, TextStyle, StyleProp, Animated } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './styles';
import { ColorSheet } from '../../../utils/ColorSheet';

const PrimaryDropDown = (props) => {
  const {
    data,
    value,
    onChange,
    placeholder,
    style,
    iconColor,
    selectedTextStyle,
    textItemStyle,
    dropdownPosition,
    placeholderStyle,
    disable,
    testID,
    customRightIcon,
  } = props;
  const [focus, setFocus] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;
  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const toggleAnimate = () => {
    const config = {
      duration: 300,
      toValue: focus ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
  };

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={[styles.textItem, textItemStyle]}>{item.label}</Text>
        {item.value === value && (
          <Octicons style={styles.icon} color='black' name='check' size={20} />
        )}
      </View>
    );
  };

  const rightIcon = () => {
    return (
      <Animated.View
        style={{
          transform: [{ rotate: arrowTransform }],
        }}
      >
        {customRightIcon?.() ?? <Entypo name='chevron-down' size={20} color={ColorSheet.Primary} />}
      </Animated.View>
    );
  };

  return (
    <Dropdown
      testID={testID}
      style={[styles.dropdown, style]}
      placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
      selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
      iconStyle={styles.iconStyle}
      iconColor={iconColor}
      renderRightIcon={rightIcon}
      data={data}
      search
      maxHeight={220}
      onFocus={() => {
        setFocus(true);
        toggleAnimate();
      }}
      onBlur={() => {
        setFocus(false);
        toggleAnimate();
      }}
      labelField='label'
      valueField='value'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      renderItem={renderItem}
      dropdownPosition={dropdownPosition}
      disable={disable}
    />
  );
};

export default PrimaryDropDown;
