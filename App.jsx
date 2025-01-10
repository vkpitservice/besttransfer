import { View, Text, Platform } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Routes from './src/navigations/Routes';
import { LogLevel, OneSignal } from 'react-native-onesignal';

const App = () => {




  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize("6131122d-57cd-4204-ae4a-8680680d4ee6");

  // requestPermission will show the native iOS or Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
  OneSignal.Notifications.requestPermission(true);

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', (event) => {
    console.log('OneSignal: notification clicked:', event);
  });




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
