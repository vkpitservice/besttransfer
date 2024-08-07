import { View, Text } from 'react-native';
import React, { useState, useMemo } from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { styles } from './styles';
import PropTypes from 'prop-types';

const OTPInput = (props) => {
  const { onChangeValue, cellCount, maskEnable, style } = props;
  const [enableMask, setEnableMask] = useState(false);
  const [value, setValue] = useState('');
  const codeFieldRef = useBlurOnFulfill({ value, cellCount: cellCount });
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useMemo(() => {
    onChangeValue && onChangeValue(value);
  }, [value]);

  useMemo(() => {
    setEnableMask(maskEnable);
  }, [maskEnable]);

  const renderCell = ({ index, symbol, isFocused }) => {
    let textChild = null;

    if (symbol) {
      textChild = enableMask ? '*' : symbol;
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <View
        style={[styles.cell, isFocused && styles.focusCell, symbol && styles.cellFilled]}
        onLayout={getCellOnLayoutHandler(index)}
        key={index}
      >
        <Text style={styles.cellText}>{textChild}</Text>
      </View>
    );
  };

  return (
    <View style={[styles.root, style]}>
      <CodeField
        rootStyle={styles.codeFieldRoot}
        ref={codeFieldRef}
        {...codeFieldProps}
        value={value}
        onChangeText={setValue}
        cellCount={cellCount}
        keyboardType='number-pad'
        textContentType='oneTimeCode'
        //  autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
        renderCell={renderCell}
      />
    </View>
  );
};

OTPInput.propTypes = {
  onChangeValue: PropTypes.func,
  cellCount: PropTypes.number.isRequired,
  maskEnable: PropTypes.bool,
};

// Define default props
OTPInput.defaultProps = {
  style: {},
  cellCount: 6,
  maskEnable: false,
};

export default OTPInput;
