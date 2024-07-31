import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DataBox = (props) => {
    const {
        style,
        title,
        showData,
    } = props
  return (
    <View style = {[styles.container, style]}>
      <Text style = {styles.title}> {title} </Text>
      <Text style = {styles.showData}> {showData} </Text>
    </View>
  )
}

export default DataBox;

const styles = StyleSheet.create({})