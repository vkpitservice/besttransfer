import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

const BeneficiarySearchListData = (props) => {
  const { imgSource, name, idNumber, sBinNumber,beneId, onClick } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={()=>onClick(beneId, name,idNumber,sBinNumber)}>
      {/* Image */}
      {imgSource ? (
        <Image style={styles.imageStyle} source={require('@/assets/images/user-profile.jpg')} />
      ) : (
        <View style={styles.placeholderImageStyle}>
          <Text style={styles.placeholderText}>{name.charAt(0).toUpperCase()}</Text>
        </View>
      )}

      <View style={styles.txtRowContainer}>
        {/* Name */}
        <Text style={styles.nameTxt}> {name} </Text>

        {/* Id  */}
        <Text style={styles.numberTxt}>
          {' '}
          {idNumber}
          {/* SBIN Number */}
          <Text style={styles.numberTxt}> {sBinNumber ? '('+sBinNumber+')' : ""} </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

//
BeneficiarySearchListData.propTypes = {
  imageSource: PropTypes.object,
  name: PropTypes.string,
  idNumber: PropTypes.string,
  sBinNumber: PropTypes.string,
  onClick: PropTypes.any
};

// Define default props
BeneficiarySearchListData.defaultProps = {
  imageSource: null,
  name: '',
  idNumber: '',
  sBinNumber: '',
};

export default BeneficiarySearchListData;
