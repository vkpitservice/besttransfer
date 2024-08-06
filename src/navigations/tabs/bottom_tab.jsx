import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import React from 'react';
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
import Beneficiary from '@/screens/app/ beneficiary/SeacrchBeneficiary';
import BeneficiaryStack from '../stacks/beneficiary_stack';

const Tab = createBottomTabNavigator();

const AppBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ColorSheet.ActiveIcon,
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
        name='HomeScreen'
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconView,
                focused && {
                  backgroundColor: ColorSheet.PrimaryButton,
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
                  backgroundColor: ColorSheet.PrimaryButton,
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
                  Transactions
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
                  backgroundColor: ColorSheet.PrimaryButton,
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
    fontSize: RFValue(12),
    fontWeight: '400',
    marginLeft: hp(1),
  },
  profileImage: {
    width: hp(6),
    height: hp(6),
    resizeMode: 'cover',
    borderRadius: 50,
    borderWidth: 1.5,
  },
  transactionsIcon: {
    marginLeft: wp(2),
  },
});

export default AppBottomTab;
