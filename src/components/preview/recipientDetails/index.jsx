import { Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const RecipientDetails = (props) => {
    const {
        name,
        accNumber,
        ifscCode,
    } = props;

  return (
    <View style = {styles.root}>

      {/* Exchange & Rae */}
      <View style={styles.rowExchangeContainer}>
        {/* Save */}
        <Text style={styles.TextTitle}> {'Name'} </Text>
        <Text style={styles.TextAmount}> {name} </Text>
      </View>

      {/* Account Number */}
      <View style={styles.rowExchangeContainer}>
        <Text style={styles.TextTitle}> {'Account Number'} </Text>
        {/* Amount */}
        <Text style={styles.TextAmount}> {accNumber} </Text>
      </View>

      {/* IFSC Code*/}
      <View style={styles.rowExchangeContainer}>
        <Text style={styles.TextTitle}> {'IFSC Code'} </Text>
        {/* Amount */}
        <Text style={styles.TextAmount}> {ifscCode} </Text>
      </View>
      
    </View>
  );
};

RecipientDetails.propTypes = {
    name: PropTypes.string,
    accNumber: PropTypes.number,
    ifscCode: PropTypes.string,
}

export default RecipientDetails;
