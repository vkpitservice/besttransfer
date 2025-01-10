import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { styles } from './styles';

const TransferWelcomeDashboardComponent = (props) => {
  const { style, imageSource, title, name, onPress, onPressProfile } = props;

  return (
    <View style={[styles.root, style]}>
      {/* Image */}
      <View style={styles.imageNameContainer}>
        {/* <TouchableOpacity onPress={onPressProfile}>
          <Image source={imageSource} style={styles.image} />
        </TouchableOpacity> */}

        <View style={styles.placeholderImageStyle}>
          <Text style={styles.placeholderText}>{name.charAt(0).toUpperCase()}</Text>
        </View>

        <View style={styles.NameContainer}>
          {/* Welcome Title */}
          <Text style={styles.welcomeText}> {title} </Text>
          {/* Auto Name Set */}
          <Text style={styles.nameText}> {name} </Text>
        </View>
      </View>

      {/* Icon */}
      <TouchableOpacity style={styles.iconContainer} onPress={onPress} activeOpacity={0.6}>
        <MaterialIcons name='logout' size={25} color='black' />
      </TouchableOpacity>
    </View>
  );
};

// Define prop types
TransferWelcomeDashboardComponent.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func,
  title: PropTypes.string,
  name: PropTypes.string,
};

// Define default props
TransferWelcomeDashboardComponent.defaultProps = {
  style: {},
  onPress: null,
  title: '',
  name: '',
};

export default TransferWelcomeDashboardComponent;
