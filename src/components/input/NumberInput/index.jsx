import React, { useRef, useState } from 'react';
import { View, Text, TextStyle, StyleProp, Animated, TextInput, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './styles';
import { ColorSheet } from '../../../utils/ColorSheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

const NumberInput = (props) => {
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
  const [valueItem, setValueItem] = useState(value);
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
        {item.value === valueItem.value && (
          <Octicons style={styles.icon} color='black' name='check' size={20} />
        )}
      </View>
    );
  };

  const rightIcon = () => {
    return (
      <Animated.View
        style={[
          styles.downIcon,
          {
            transform: [{ rotate: arrowTransform }],
          },
        ]}
      >
        {customRightIcon?.() ?? <Entypo name='chevron-down' size={20} color={ColorSheet.Primary} />}
      </Animated.View>
    );
  };

  const onChangeValue = (value) => {
    setValueItem(value);
    onChange && onChange(value);
  };

  const renderInputSearch = (onSearch) => {
    return (
      <View style={styles.searchContainer}>
        <Ionicons name='search' size={wp(5)} color={ColorSheet.CheckBox} />
        <TextInput
          style={styles.searchInput}
          placeholderTextColor={ColorSheet.Text2}
          placeholder='Search...'
          onChangeText={onSearch}
        />
      </View>
    );
  };

  return (
    <View style={[styles.root, style]}>
      <Image
        source={{
          uri: data.find((item) => item.value === valueItem.value)?.image ?? '',
        }}
        style={styles.countryLogo}
      />
      <Dropdown
        testID={testID}
        style={[styles.dropdown]}
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
        labelField='value'
        valueField='label'
        placeholder={''}
        value={valueItem.label}
        onChange={onChangeValue}
        renderItem={renderItem}
        dropdownPosition={dropdownPosition}
        disable={disable}
        renderInputSearch={renderInputSearch}
        searchField={'label'}
        containerStyle={styles.containerStyle}
        //  minHeight={hp(28)}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor={ColorSheet.Text2}
        placeholder={placeholder}
        keyboardType='number-pad'
      />
    </View>
  );
};

// Define prop types
NumberInput.propTypes = {
  data: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  iconColor: PropTypes.string,
  selectedTextStyle: PropTypes.object,
  textItemStyle: PropTypes.object,
  dropdownPosition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholderStyle: PropTypes.object,
  disable: PropTypes.bool,
  testID: PropTypes.string,
  customRightIcon: PropTypes.element,
};

// Define default props
NumberInput.defaultProps = {
  value: '',
  placeholder: '',
  style: {},
  iconColor: 'black',
  selectedTextStyle: {},
  textItemStyle: {},
  dropdownPosition: 0,
  placeholderStyle: {},
  disable: false,
  testID: '',
  customRightIcon: null,
};

export default NumberInput;
