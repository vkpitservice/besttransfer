import { Image, Text, View } from 'react-native';
import React from 'react';
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

  return (
    <View style={[styles.rootBox, style]}>
      {/* Saving View */}
      <View style={styles.savingContainer}>
        {/* Saving Text And Amount */}
        <View style={styles.txtAmountContainer}>
          <Text style={styles.Text}> {saveTitle} </Text>
          <Text style={styles.Amount}> {parseFloat(saveAmount).toFixed(2)} </Text>
        </View>

        {/* Saving Country Image */}
        <View style={styles.countryNameImageContainer}>
          <Text style={styles.countryName}> {saveCountry} </Text>
          <Image style={styles.image} source={saveImageSource} />
        </View>
      </View>

      {/* Horizontal And SVG Rotate */}
      <View style={styles.horizontalContainer}>
        <View style={styles.horizontalLine} />
        <View style={styles.rotateContainer}>
          <Rotate width={20} height={18} />
        </View>
      </View>

      {/* Recieving View */}
      <View style={styles.recievingContainer}>
        {/* Recieving Text And Amount */}
        <View style={styles.txtAmountContainer}>
          <Text style={styles.Text}> {recieveTitle} </Text>
          <Text style={styles.Amount}> {parseFloat(recieveAmount).toFixed(2)} </Text>
        </View>

        {/* Recieving Country Image */}
        <View style={styles.countryNameImageContainer}>
          <Text style={styles.countryName}> {recieveCountry} </Text>
          <Image style={styles.image} source={recieveImageSource} />
        </View>
      </View>
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
