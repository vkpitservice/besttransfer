import { StyleSheet, Text, View } from 'react-native'
import * as Progress from 'react-native-progress';
import React from 'react'
import PropTypes from 'prop-types';
import { ColorSheet } from '@/utils/ColorSheet';

const ProgressStatusBar = (props: any) => {
  const {
    progress,
  } = props;

  return (
    <View style = {styles.container}>
      <Progress.Bar 
        progress = {progress} 
        width={80} 
        animated = {true}
        color = {ColorSheet.PrimaryButton}
        unfilledColor = {ColorSheet.StatusBarBg}
        borderColor = {ColorSheet.StatusBarBg}
        />
    </View>
  )
}

// Define prop Type
ProgressStatusBar.propTypes = {
  progress: PropTypes.number
}

// Define default props
ProgressStatusBar.defaultProps = {
  progress: 0
}

export default ProgressStatusBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 3
  }
})