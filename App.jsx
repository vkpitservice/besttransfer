import { View, Text, Platform } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Routes from './src/navigations/Routes';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Routes />
      <FlashMessage
        position='top'
        floating
        statusBarHeight={Platform.OS == 'ios' ? hp(5) : hp(7)}
      />
    </GestureHandlerRootView>
  );
};

export default App;
