import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'

const ResidentIdentityDocument = () => {
  return (
    <KeyboardAvoidingView
       style = {styles.container}
       behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <StatusBar
            barStyle='light-content'
            translucent
            backgroundColor={ColorSheet.PrimaryButton}
        />

        <ScrollView
            contentContainerStyle = {styles.scroll_container}
            bounces = {false}
            showsVerticalScrollIndicator = {false}
        >

            {/* <Image
              style = {styles.imageBackground}
            /> */}
            <View>
                
            </View>

        </ScrollView>

    </KeyboardAvoidingView>
  )
}

export default ResidentIdentityDocument;