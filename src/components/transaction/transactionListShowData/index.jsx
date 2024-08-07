import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';
import RequestSuccess from '@/assets/svg/transaction/RequestSuccessIcon.svg';
import RequestFail from '@/assets/svg/transaction/RequestFail.svg';

const TransactionListShowData = (props) => {
  const { imageSource, name, date, amount, type, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      {/* 1st row */}
      <View style={styles.imageTextContainer}>
        {/* Image */}
        <View style={styles.imgContainer}>
          <Image style={styles.imageStyle} source={imageSource} />

          {/* SVG Success or Fail */}
          <View style={styles.svgContainer}>
            {/* SVG Success */}
            {type == 'success' && <RequestSuccess />}

            {/* SVG Fail */}
            {type == 'fail' && <RequestFail />}
          </View>
        </View>
        {/* Name And Date */}
        <View style={styles.nameDateContainer}>
          <Text style={styles.nameTxt}> {name} </Text>
          <Text style={styles.dateTxt}> {date} </Text>
        </View>
      </View>

      {/* 2nd Row */}
      {type == 'success' && <Text style={styles.amountTxt}> +{amount} </Text>}

      {type == 'fail' && <Text style={styles.amountTxt}> -{amount} </Text>}
    </TouchableOpacity>
  );
};

TransactionListShowData.propTypes = {
  imageSource: PropTypes.object,
  name: PropTypes.string,
  date: PropTypes.string,
  amount: PropTypes.string,
  type: PropTypes.string,
  onPress: PropTypes.func,
};

export default TransactionListShowData;
