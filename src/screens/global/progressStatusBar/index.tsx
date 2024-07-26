import { StyleSheet, Text, View } from 'react-native'
import * as Progress from 'react-native-progress';
import React from 'react'
import PropTypes from 'prop-types';
import { ColorSheet } from '@/utils/ColorSheet';

const ProgressStatusBar = (props: any) => {
  const {
    progress1,
    progress2,
    progress3,
    icon
  } = props;

  return (
    <View style = {styles.container}>
        <Progress.Bar 
        progress = {progress1} 
        width={75} 
        animated = {true}
        color = {ColorSheet.PrimaryButton}
        unfilledColor = {ColorSheet.StatusBarBg}
        borderColor = {ColorSheet.StatusBarBg}
        />

      <Progress.Bar 
        progress = {progress2} 
        width={75} 
        animated = {true}
        color = {ColorSheet.PrimaryButton}
        unfilledColor = {ColorSheet.StatusBarBg}
        borderColor = {ColorSheet.StatusBarBg}
      />

      <Progress.Bar 
        progress = {progress3} 
        width={75} 
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
  progress1: PropTypes.number,
  progress2: PropTypes.number,
  progress3: PropTypes.number,
}

// Define default props
ProgressStatusBar.defaultProps = {
  progress1: 0,
  progress2: 0,
  progress3: 0,
}

export default ProgressStatusBar;

const styles = StyleSheet.create({
  container: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  }
})