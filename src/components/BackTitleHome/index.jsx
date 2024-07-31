import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ColorSheet } from '@/utils/ColorSheet';
import PropTypes from 'prop-types';
import { styles } from './styles';

const BackTitleHomeComponent = (props) => {
  const { style, title, onPressBack, onPressHome } = props;

  return (
    <View style={[styles.root, style]}>
      {/* Back Icon */}
      <TouchableOpacity style={styles.backIcon} onPress={onPressBack} activeOpacity={0.8}>
        <Ionicons name='chevron-back-circle-sharp' size={34} color={ColorSheet.PrimaryButtonTxt} />
      </TouchableOpacity>
      {/* Title */}
      <Text style={styles.title}> {title} </Text>
      {/* Add Title */}
      {onPressHome && (
        <TouchableOpacity style={styles.addIcon} onPress={onPressHome} activeOpacity={0.8}>
          <View style={styles.roundContainer}>
            <Feather name='home' size={22} color={ColorSheet.PrimaryButton} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

// Define prop types
BackTitleHomeComponent.propTypes = {
  style: PropTypes.object,
  onPressBack: PropTypes.func,
  title: PropTypes.string,
  onPressHome: PropTypes.func,
};

// Define default props
BackTitleHomeComponent.defaultProps = {
  style: {},
  onPressBack: null,
  title: '',
  onPressHome: null,
};

export default BackTitleHomeComponent;
