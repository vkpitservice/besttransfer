import { Image, Text, View, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import { styles } from './styles';
import Rotate from '@/assets/svg/transaction/Rotate.svg';
import PropTypes from 'prop-types';

const TransferSavingRecieving = (props) => {
  const {
    style,
    saveTitle,
    saveAmount,
    saveCountry,
    saveImageSource,
    recieveTitle,
    recieveAmount,
    recieveCountry,
    recieveImageSource,
  } = props;

  const [isSwitched, setIsSwitched] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const handleRotate = () => {
    Animated.timing(rotateAnim, {
      toValue: isSwitched ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setIsSwitched(!isSwitched);
    });
  };

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const transformStyle = {
    transform: [{ rotate }],
  };

  return (
    <View style={[styles.rootBox, style]}>
      <Animated.View style={transformStyle}>
        {/* Saving View */}

        <View style={styles.savingContainer}>
          {/* Saving Text And Amount */}
          <View style={styles.txtAmountContainer}>
            <Text style={styles.Text}> {isSwitched ? recieveTitle : saveTitle} </Text>
            <Text style={styles.Amount}>
              {parseFloat(isSwitched ? recieveAmount : saveAmount).toFixed(2)}
            </Text>
          </View>

          {/* Saving Country Image */}
          <View style={styles.countryNameImageContainer}>
            <Text style={styles.countryName}> {isSwitched ? recieveCountry : saveCountry} </Text>
            <Image
              style={styles.image}
              source={isSwitched ? recieveImageSource : saveImageSource}
            />
          </View>
        </View>

        {/* Horizontal And SVG Rotate */}
        <View style={styles.horizontalContainer}>
          <View style={styles.horizontalLine} />
          <TouchableOpacity style={styles.rotateContainer} onPress={handleRotate}>
            <Rotate width={20} height={18} />
          </TouchableOpacity>
        </View>

        {/* Recieving View */}
        <View style={styles.recievingContainer}>
          {/* Recieving Text And Amount */}
          <View style={styles.txtAmountContainer}>
            <Text style={styles.Text}> {isSwitched ? saveTitle : recieveTitle} </Text>
            <Text style={styles.Amount}>
              {parseFloat(isSwitched ? saveAmount : recieveAmount).toFixed(2)}
            </Text>
          </View>

          {/* Recieving Country Image */}
          <View style={styles.countryNameImageContainer}>
            <Text style={styles.countryName}> {isSwitched ? saveCountry : recieveCountry} </Text>
            <Image
              style={styles.image}
              source={isSwitched ? saveImageSource : recieveImageSource}
            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

// Define prop types
TransferSavingRecieving.propTypes = {
  style: PropTypes.object,
  saveTitle: PropTypes.string,
  saveAmount: PropTypes.string,
  saveCountry: PropTypes.string,
  saveImageSource: PropTypes.string,
  recieveTitle: PropTypes.string,
  recieveAmount: PropTypes.string,
  recieveCountry: PropTypes.string,
  recieveImageSource: PropTypes.string,
};

// Define default props
TransferSavingRecieving.defaultProps = {
  style: {},
  saveTitle: '',
  saveAmount: '',
  saveCountry: '',
  saveImageSource: null,
  recieveTitle: '',
  recieveAmount: '',
  recieveCountry: '',
  recieveImageSource: null,
};

export default TransferSavingRecieving;
