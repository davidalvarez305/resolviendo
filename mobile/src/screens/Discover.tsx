import React, {useContext} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import {LanguageContext} from '../context/LanguageContext';

const Discover: React.FC = () => {
  const {language} = useContext(LanguageContext);
  return (
    <View>
      <Text>{language === 'Spanish' ? 'Busqueda' : 'Search'}</Text>
    </View>
  );
};

export default Discover;
