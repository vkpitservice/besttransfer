import { View, Text } from 'react-native';
import React from 'react';
import PrimaryDropDown from '@/components/dropdowns/primary_dropdown';

const LoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 100,
      }}
    >
      <Text>Login</Text>
      <PrimaryDropDown
        data={[
          { label: 'item 1', value: '1' },
          { label: 'item 2', value: '2' },
          { label: 'item 3', value: '3' },
        ]}
        value=''
        onChange={() => {}}
      />
    </View>
  );
};

export default LoginScreen;
