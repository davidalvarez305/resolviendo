import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Discover from '../screens/Discover';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import Store from '../screens/Store';
import {SvgXml} from 'react-native-svg';
import {LanguageContext} from '../context/LanguageContext';
import { HEART_ICON, HOME_ICON, PROFILE_ICON, SHOPPING_CART_ICON, SEARCH_ICON, MONITOR_ICON } from '../../assets/icons/General';
import { AuthContext } from '../context/AuthContext';
import ForgotPassword from '../screens/ForgotPassword';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Tab = createBottomTabNavigator();

const Nav: React.FC = () => {
  const {language} = useContext(LanguageContext);
  const {isLoggedIn} = useContext(AuthContext);
  const isSpanish = language === 'Spanish';

  if (!isLoggedIn) {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Login"
          options={{
            title: isSpanish ? 'Iniciar' : 'Login',
            tabBarIcon: () => <SvgXml xml={HOME_ICON} width="85%" height="85%" />,
          }}
          component={Login}
        />
        <Tab.Screen
          name="Register"
          options={{
            title: isSpanish ? 'Registrarse' : 'Register',
            tabBarIcon: () => (
              <SvgXml xml={SEARCH_ICON} width="85%" height="85%" />
            ),
          }}
          component={Register}
        />
        <Tab.Screen
          name="Change Password"
          options={{
            title: isSpanish ? 'Cambiar Contraseña' : 'Change Password',
            tabBarIcon: () => (
              <SvgXml xml={HEART_ICON} width="85%" height="85%" />
            ),
          }}
          component={ForgotPassword}
        />
      </Tab.Navigator>
    );
  }

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
            <SvgXml xml={SEARCH_ICON} width="85%" height="85%" />
          ),
        }}
        component={Discover}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          title: isSpanish ? 'Favoritos' : 'Favorites',
          tabBarIcon: () => (
            <SvgXml xml={HEART_ICON} width="85%" height="85%" />
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
            <SvgXml xml={PROFILE_ICON} width="85%" height="85%" />
          ),
        }}
        component={Profile}
      />
      <Tab.Screen
        name="Store"
        options={{
          title: isSpanish ? 'Tienda' : 'Store',
          tabBarIcon: () => (
            <SvgXml xml={MONITOR_ICON} width="70%" height="70%" />
          ),
        }}
        component={Store}
      />
    </Tab.Navigator>
  );
};

export default Nav;
