import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import useLanguageHook from '../hooks/useLanguageHook';

const ProductDetail: React.FC = () => {
  const {language, changeLanguage} = useLanguageHook();
  return (
    <View>
      <Text>
        {language === 'Spanish'
          ? 'Detalles Sobre Este Producto'
          : 'Details About This Product'}
      </Text>
    </View>
  );
};

export default ProductDetail;