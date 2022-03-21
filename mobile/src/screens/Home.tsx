import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {AMERICAN_FLAG, CUBAN_FLAG} from '../../assets/icons/Flags';
import useLanguageHook from '../hooks/useLanguageHook';
import IconButton from '../ui/IconButton';

const Home: React.FC = () => {
  const {language, changeLanguage} = useLanguageHook();
  return (
    <View>
      <Text>{language === 'Spanish' ? 'Inicial' : 'Home'}</Text>
      <IconButton
        onPress={changeLanguage}
        icon={
          <SvgXml
            xml={language === 'Spanish' ? AMERICAN_FLAG : CUBAN_FLAG}
            width="40%"
            height="40%"
          />
        }
      />
    </View>
  );
};

export default Home;
