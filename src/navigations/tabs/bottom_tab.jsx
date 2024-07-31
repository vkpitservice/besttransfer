import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ColorSheet } from '@/utils/ColorSheet';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import Home from '@/assets/icons/bottom_tab/Home.svg';
import Swap from '@/assets/icons/bottom_tab/Swap.svg';
import UserGroup from '@/assets/icons/bottom_tab/UserGroup.svg';
import TransactionStack from '../stacks/transaction_stack';
import HomeScreen from '@/screens/app/home';

const Tab = createBottomTabNavigator();

const AppBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ColorSheet.ActiveIcon,
        tabBarInactiveTintColor: ColorSheet.InactiveIcon,

        tabBarStyle: {
          backgroundColor: ColorSheet.AppPrimaryBackground,
          borderTopWidth: 0,
          height: hp(15),
        },

        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.iconView}>
              <Home fill={color} />
              <Text
                style={[
                  styles.labelText,
                  {
                    color: color,
                  },
                ]}
              >
                Home
              </Text>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name='MessageStack'
        component={TransactionStack}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.iconView}>
              <Swap fill={color} />
              <Text
                style={[
                  styles.labelText,
                  {
                    color: color,
                  },
                ]}
              >
                Message
              </Text>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name='NotificationStack'
        component={TransactionStack}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.iconView}>
              <UserGroup fill={color} />
              <Text
                style={[
                  styles.labelText,
                  {
                    color: color,
                  },
                ]}
              >
                Notification
              </Text>
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(5),
  },
  labelText: {
    fontSize: RFValue(7),
    fontWeight: '400',
  },
  profileImage: {
    width: hp(6),
    height: hp(6),
    resizeMode: 'cover',
    borderRadius: 50,
    borderWidth: 1.5,
  },
});

export default AppBottomTab;
