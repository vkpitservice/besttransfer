import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ColorSheet } from '@/utils/ColorSheet';
import { styles } from './styles';
import PropTypes from 'prop-types';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const BackTitleAddComponent = (props) => {
  const { style, title, onPressBack, onPressAdd } = props;

  return (
    <View style={[styles.root, style]}>
      {/* Back Icon */}
      <TouchableOpacity style={styles.backIcon} onPress={onPressBack} activeOpacity={0.8}>
        <Ionicons
          name='chevron-back-circle-sharp'
          size={wp(11)}
          color={ColorSheet.PrimaryButtonTxt}
        />
      </TouchableOpacity>
      {/* Title */}
      <Text style={styles.title}> {title} </Text>
      {/* Add Title */}
      {onPressAdd && (
        <TouchableOpacity style={styles.addIcon} onPress={onPressAdd} activeOpacity={0.8}>
          <Ionicons name='add-circle-sharp' size={wp(11)} color={ColorSheet.PrimaryButtonTxt} />
        </TouchableOpacity>
      )}
    </View>
  );
};

// Define prop types
BackTitleAddComponent.propTypes = {
  style: PropTypes.object,
  onPressBack: PropTypes.func,
  title: PropTypes.string,
  onPressAdd: PropTypes.func,
};

// Define default props
BackTitleAddComponent.defaultProps = {
  style: {},
  onPressBack: null,
  title: '',
  onPressAdd: null,
};

export default BackTitleAddComponent;
