import { GestureResponderEvent, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';

interface primaryButtonProps {
    title?: string;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    style?: StyleProp<ViewStyle>;
}

const PrimaryButton = (props: primaryButtonProps) => {
    const {
        title,
        onPress,
        style
    } = props

  return (
    <TouchableOpacity
      style = {
        [
            styles.button_root,
            style
        ]
      }
      onPress = {onPress}
      activeOpacity = {0.5}
    >
        <Text style = {styles.title_txt}> {title} </Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton;