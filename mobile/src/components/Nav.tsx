import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Discover from '../screens/Discover';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import Store from '../screens/Store';
import {SvgXml} from 'react-native-svg';
import {
  HOME_ICON,
  MONITOR_ICON,
  NAV_HEART_ICON,
  PROFILE_ICON,
  SEARCH_ICON,
  SHOPPING_CART_ICON,
} from '../../assets/icons/Navigation';
import {LanguageContext} from '../context/LanguageContext';

const Tab = createBottomTabNavigator();

const Nav: React.FC = () => {
  const {language} = useContext(LanguageContext);
  const isSpanish = language === 'Spanish';
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        options={{
          title: isSpanish ? 'Inicio' : 'Home',
          tabBarIcon: () => <SvgXml xml={HOME_ICON} width="85%" height="85%" />,
        }}
        component={Home}
      />
      <Tab.Screen
        name="Discover"
        options={{
          title: isSpanish ? 'Busqueda' : 'Discover',
          tabBarIcon: () => (
            <SvgXml xml={SEARCH_ICON} width="70%" height="70%" />
          ),
        }}
        component={Discover}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          title: isSpanish ? 'Favoritos' : 'Favorites',
          tabBarIcon: () => (
            <SvgXml xml={NAV_HEART_ICON} width="70%" height="70%" />
          ),
        }}
        component={Favorites}
      />
      <Tab.Screen
        name="Cart"
        options={{
          title: isSpanish ? 'Carrito' : 'Cart',
          tabBarIcon: () => (
            <SvgXml xml={SHOPPING_CART_ICON} width="85%" height="85%" />
          ),
        }}
        component={Cart}
      />
      <Tab.Screen
        name="Profile"
        options={{
          title: isSpanish ? 'Pérfil' : 'Profile',
          tabBarIcon: () => (
            <SvgXml xml={PROFILE_ICON} width="75%" height="75%" />
          ),
        }}
        component={Profile}
      />
      <Tab.Screen
        name="Store"
        options={{
          title: isSpanish ? 'Tienda' : 'Store',
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
