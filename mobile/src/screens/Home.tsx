import React from 'react';
import {View, Text} from 'react-native';
import isAuth from '../hooks/isAuth';
import Login from './Login';

const Home: React.FC = () => {
  const {isLoggedIn} = isAuth();
  return (
    <View>
      {isLoggedIn ? <Text>Logged in!</Text> : <Login />}
    </View>
  );
};

export default Home;
