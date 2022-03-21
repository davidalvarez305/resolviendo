import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import useLanguageHook from '../hooks/useLanguageHook';

const ProductList: React.FC = () => {
  const {language, changeLanguage} = useLanguageHook();
  return (
    <View>
      <Text>{language === 'Spanish' ? 'Lista' : 'List'}</Text>
    </View>
  );
};

export default ProductList;
