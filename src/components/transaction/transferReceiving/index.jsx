import { Image, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const TransferRecieving = (props) => {
  const { style, recieveTitle, recieveAmount, recieveCountry, recieveImageSource } = props;

  return (
    <View style={[styles.recievingContainer, style]}>
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
  );
};

// Define prop types
TransferRecieving.propTypes = {
  style: PropTypes.object,
  recieveTitle: PropTypes.string,
  recieveAmount: PropTypes.string,
  recieveCountry: PropTypes.string,
  recieveImageSource: PropTypes.string,
};

// Define default props
TransferRecieving.defaultProps = {
  style: {},
  recieveTitle: '',
  recieveAmount: '',
  recieveCountry: '',
  recieveImageSource: null,
};

export default TransferRecieving;
