import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import Rotate from '@/assets/svg/transaction/Rotate.svg';

import AnimatedTextInput from '@/components/input/AnimatedTextInput';
import PropTypes from 'prop-types';

const CurrencyCoveter = (props) => {
  const {
    containerStyle,
    sendingAmountValue,
    onChangeSendingAmount,
    sendingCurrency,
    receivingAmountValue,
    onChangeReceivingAmount,
    receivingCurrency,
    sendingCurrencySource,
    receivingCurrencySource,
  } = props;
  const [swapped, setSwapped] = useState(false);

  const position1 = useSharedValue(0);
  const position2 = useSharedValue(1);

  const swapButtons = () => {
    position1.value = withTiming(swapped ? 0 : 1);
    position2.value = withTiming(swapped ? 1 : 0);
    setSwapped(!swapped);
  };

  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(position1.value * 85) }],
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(position2.value * 85) }],
    };
  });
  return (
    <View style={[styles.topContainer, containerStyle]}>
      <Animated.View style={[styles.currencyInputView, animatedStyle1]}>
        <AnimatedTextInput
          onChangeText={onChangeSendingAmount}
          value={sendingAmountValue}
          placeholder={'Sending Amount'}
        />

        <View style={styles.selectCurrencyView}>
          <Text style={styles.currencyLabel}>{sendingCurrency}</Text>
          <Image style={styles.selectCurrencyLogo} source={sendingCurrencySource} />
        </View>
      </Animated.View>

      <View style={styles.coveterView}>
        <TouchableOpacity onPress={swapButtons} style={styles.coveterButton}>
          <Rotate width={20} height={18} />
        </TouchableOpacity>
      </View>

      <Animated.View style={[styles.currencyInputView, animatedStyle2]}>
        <AnimatedTextInput
          onChangeText={onChangeReceivingAmount}
          value={receivingAmountValue}
          placeholder={'Reiving Amount'}
        />

        <View style={styles.selectCurrencyView}>
          <Text style={styles.currencyLabel}>{receivingCurrency}</Text>
          <Image style={styles.selectCurrencyLogo} source={receivingCurrencySource} />
        </View>
      </Animated.View>
    </View>
  );
};

CurrencyCoveter.propTypes = {
  containerStyle: PropTypes.object,
  sendingAmountValue: PropTypes.string,
  onChangeSendingAmount: PropTypes.func,
  sendingCurrency: PropTypes.string,
  receivingAmountValue: PropTypes.string,
  onChangeReceivingAmount: PropTypes.func,
  receivingCurrency: PropTypes.string,
  sendingCurrencySource: PropTypes.any,
  receivingCurrencySource: PropTypes.any,
};

export default CurrencyCoveter;
