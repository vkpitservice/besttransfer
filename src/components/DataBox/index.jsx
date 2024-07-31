import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

const DataBox = (props) => {
  const { style, title, showData } = props;
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.titleText}> {title} </Text>
      <Text style={styles.showDataText}> {showData} </Text>
    </View>
  );
};

// Define prop types
DataBox.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  showData: PropTypes.string,
};

// Define default props
DataBox.defaultProps = {
  style: {},
  title: '',
  showData: '',
};

export default DataBox;
