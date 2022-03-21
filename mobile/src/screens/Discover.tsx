import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import useLanguageHook from '../hooks/useLanguageHook';

const Discover: React.FC = () => {
  const {language, changeLanguage} = useLanguageHook();
  return (
    <View>
      <Text>{language === 'Spanish' ? 'Busqueda' : 'Search'}</Text>
    </View>
  );
};

export default Discover;
