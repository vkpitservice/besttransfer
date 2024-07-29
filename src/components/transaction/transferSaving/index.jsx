import { Image, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import { styles } from './styles';

const TransferSaving= (props) => {
  const {
    style,
    saveTitle,
    saveAmount,
    saveCountry,
    saveImageSource,
  } = props

  return (
      <View style = {styles.savingContainer}>
        {/* Saving Text And Amount */}
        <View style = {styles.txtAmountContainer}>
          <Text style = {styles.Text}> {saveTitle} </Text>
          <Text style = {styles.Amount}> {parseFloat(saveAmount).toFixed(2)} </Text>
        </View>

        {/* Saving Country Image */}
        <View style = {styles.countryNameImageContainer}>
          <Text style = {styles.countryName}> {saveCountry} </Text>
          <Image
            style = {styles.image}
            source = {saveImageSource}
          />
        </View>
      </View>
  )
}

// Define prop types
TransferSaving.propTypes = {
  style: PropTypes.object,
  saveTitle: PropTypes.string,
  saveAmount: PropTypes.string,
  saveCountry: PropTypes.string,
  saveImageSource: PropTypes.string,
};

// Define default props
TransferSaving.defaultProps = {
  style: {},
  saveTitle: '',
  saveAmount: '',
  saveCountry: '',
  saveImageSource: null,
};

export default TransferSaving;