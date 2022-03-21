import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Discover from '../screens/Discover';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import Store from '../screens/Store';
import {SvgXml} from 'react-native-svg';
import { HOME_ICON, MONITOR_ICON, NAV_HEART_ICON, PROFILE_ICON, SEARCH_ICON, SHOPPING_CART_ICON } from '../../assets/icons/Navigation';

const Tab = createBottomTabNavigator();

const Nav: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: () => (
            <SvgXml xml={HOME_ICON} width="85%" height="85%" />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Discover"
        options={{
          tabBarIcon: () => (
            <SvgXml xml={SEARCH_ICON} width="70%" height="70%" />
          ),
        }}
        component={Discover}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          tabBarIcon: () => (
            <SvgXml xml={NAV_HEART_ICON} width="70%" height="70%" />
          ),
        }}
        component={Favorites}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon: () => (
            <SvgXml xml={SHOPPING_CART_ICON} width="85%" height="85%" />
          ),
        }}
        component={Cart}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: () => (
            <SvgXml xml={PROFILE_ICON} width="75%" height="75%" />
          ),
        }}
        component={Profile}
      />
      <Tab.Screen
        name="Store"
        options={{
          tabBarIcon: () => (
            <SvgXml xml={MONITOR_ICON} width="75%" height="75%" />
          ),
        }}
        component={Store}
      />
    </Tab.Navigator>
  );
};

export default Nav;
