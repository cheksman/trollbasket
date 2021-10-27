import React, {useContext} from 'react';
import {ThemeContext, Icon} from 'react-native-elements';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';

import Onboarding from '../onboarding/onboarding';
import ComingSoon from '../screens/coming-soon/coming-soon';
import Products from '../screens/buy/products';
import productDetails from '../screens/buy/product-details';
import cart from '../screens/buy/cart';
import checkout from '../screens/buy/checkout';

const Stack = createStackNavigator();

export const OnboardingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding" headerMode="none">
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

const PrivateTabs = () => {
  const {theme} = useContext(ThemeContext);
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Buy"
      backBehavior="order"
      labeled
      shifting={false}
      activeColor={theme.colors.primary}
      inactiveColor="#000"
      barStyle={privateTabStyles.barStyles}
      drawerType="slide">
      <Tab.Screen
        name="Home"
        component={ComingSoon}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Icon
              type="material-community"
              color={color}
              name={focused ? 'home' : 'home-outline'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Buy"
        component={Products}
        options={{
          tabBarLabel: 'Buy',
          tabBarIcon: ({color, focused}) => (
            <Icon
              type="material-community"
              color={color}
              name={focused ? 'cart' : 'cart-outline'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Deals"
        component={ComingSoon}
        options={{
          tabBarLabel: 'Deals',
          tabBarIcon: ({color, focused}) => (
            <Icon
              type="material-community"
              color={color}
              name={focused ? 'tag-multiple' : 'tag-multiple-outline'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={ComingSoon}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({color, focused}) => (
            <Icon
              type="material-community"
              color={color}
              name={focused ? 'wallet' : 'wallet-outline'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={ComingSoon}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color, focused}) => (
            <Icon
              type="material-community"
              color={color}
              name={focused ? 'menu' : 'menu'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const BuyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={PrivateTabs} />
      <Stack.Screen name="ProductsDetails" component={productDetails} />
      <Stack.Screen name="Cart" component={cart} />
      <Stack.Screen name="Checkout" component={checkout} />
      <Stack.Screen name="Onboarding" component={OnboardingStack} />
    </Stack.Navigator>
  );
};

const privateTabStyles = StyleSheet.create({
  barStyles: {
    backgroundColor: '#fff',
    height: 60,
  },
});

export default BuyStack;
