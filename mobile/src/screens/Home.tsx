import React, {useState} from 'react';
import {View, Text} from 'react-native';
import useIsAuth from '../hooks/useIsAuth';
import Login from './Login';
import ProductDetail from './ProductDetail';

const Home: React.FC = () => {
  const {isLoggedIn} = useIsAuth();
  const [showProductDetail, setShowProductDetail] = useState(false);
  return (
    <View>
      {isLoggedIn ? (
        <ProductDetail setShowProductDetail={setShowProductDetail} />
      ) : (
        <Login />
      )}
    </View>
  );
};

export default Home;
