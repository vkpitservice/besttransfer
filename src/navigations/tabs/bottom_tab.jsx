import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ColorSheet } from '@/utils/ColorSheet';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import Home from '@/assets/icons/bottom_tab/Home.svg';
import Swap from '@/assets/icons/bottom_tab/Swap.svg';
import UserGroup from '@/assets/icons/bottom_tab/UserGroup.svg';
import TransactionStack from '../stacks/transaction_stack';
import HomeScreen from '@/screens/app/home';
import Swap90 from '@/assets/icons/bottom_tab/Swap90.svg';
import BeneficiaryStack from '../stacks/beneficiary_stack';
import HomeStack from '../stacks/profile_stack';
import QrStack from '../stacks/qr_stack';
import WalletStack from '../stacks/wallet_stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // When open the Keyboard that time Avoid the TabBar
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: ColorSheet.SecondaryText,
        tabBarInactiveTintColor: ColorSheet.InactiveIcon,
        tabBarStyle: {
          height: hp(13),
          borderTopWidth: 0,
          paddingRight: wp(3),
          backgroundColor: ColorSheet.White,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: 'absolute',
        },

        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name='HomeStack'
        component={HomeStack}
        options={() => ({
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconView,
                focused && {
                  backgroundColor: ColorSheet.StatusBarBg,
                },
              ]}
            >
              <Home fill={color} />
              {focused && (
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
              )}
            </View>
          ),
        })}
      />
      <Tab.Screen
        name='TransactionStack'
        component={TransactionStack}
        options={() => ({
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconView,
                focused && {
                  backgroundColor: ColorSheet.StatusBarBg,
                },
              ]}
            >
              {focused ? (
                <Swap90 style={styles.transactionsIcon} fill={color} />
              ) : (
                <Swap style={styles.transactionsIcon} fill={color} />
              )}

              {focused && (
                <Text
                  style={[
                    styles.labelText,
                    {
                      color: color,
                    },
                  ]}
                >
                  Transfers
                </Text>
              )}
            </View>
          ),
        })}
      />

      <Tab.Screen
        name='QRScan'
        component={QrStack}
        options={() => ({
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconView,
                focused && {
                  backgroundColor: ColorSheet.StatusBarBg,
                },
              ]}
            >
              {focused ? (
                <Image style={[styles.transactionsIcon, { width: hp(2), height: hp(2), resizeMode: 'contain' }]} source={require('../../assets/icons/bottom_tab/qr_scan_selected.png')} />
              ) : (
                <Image style={[styles.transactionsIcon, { width: hp(2), height: hp(2), resizeMode: 'contain' }]} source={require('../../assets/icons/bottom_tab/qr_scan.png')} />
              )}

              {focused && (
                <Text
                  style={[
                    styles.labelText,
                    {
                      color: color,
                    },
                  ]}
                >
                  Scan QR
                </Text>
              )}
            </View>
          ),
        })}
      />


      <Tab.Screen
        name='Wallet'
        component={WalletStack}
        options={() => ({
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconView,
                focused && {
                  backgroundColor: ColorSheet.StatusBarBg,
                },
              ]}
            >
              {focused ? (
                <MaterialCommunityIcons name='wallet-plus' size={25} />
              ) : (
                <MaterialCommunityIcons name='wallet-plus-outline' size={25} />
              )}

              {focused && (
                <Text
                  style={[
                    styles.labelText,
                    {
                      color: color,
                    },
                  ]}
                >
                  Wallet
                </Text>
              )}
            </View>
          ),
        })}
      />


      <Tab.Screen
        name='NotificationStack'
        component={BeneficiaryStack}
        options={() => ({
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconView,
                focused && {
                  backgroundColor: ColorSheet.StatusBarBg,
                },
              ]}
            >
              <UserGroup fill={color} />
              {focused && (
                <Text
                  style={[
                    styles.labelText,
                    {
                      color: color,
                    },
                  ]}
                >
                  Beneficiary
                </Text>
              )}
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
    justifyContent: 'center',
    marginTop: hp(2),
    flexDirection: 'row',
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.2),
    borderRadius: 50,
  },
  labelText: {
    fontSize: RFValue(11),
    fontWeight: '400',
    marginLeft: hp(0.2),
  },
  profileImage: {
    width: hp(6),
    height: hp(6),
    resizeMode: 'cover',
    borderRadius: 50,
    borderWidth: 1.5,
  },
  transactionsIcon: {
    marginLeft: wp(0.5),
  },
});

export default AppBottomTab;
