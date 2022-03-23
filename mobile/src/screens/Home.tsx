import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {AMERICAN_FLAG, CUBAN_FLAG} from '../../assets/icons/Flags';
import {LanguageContext} from '../context/LanguageContext';
import IconButton from '../ui/IconButton';
import ProductCard from '../ui/ProductCard';
import ProductSearch from '../ui/ProductSearch';

const Home: React.FC = () => {
  const {language, changeLanguage} = useContext(LanguageContext);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.textStyles}>
            {language === 'Spanish' ? 'Inicial' : 'Home'}
          </Text>
        </View>
        <View style={styles.toggleLanguageButton}>
          <IconButton
            onPress={changeLanguage}
            icon={
              <SvgXml
                xml={language === 'Spanish' ? AMERICAN_FLAG : CUBAN_FLAG}
              />
            }
          />
        </View>
      </View>
      <View style={styles.productCard}>
        <ProductCard name={'text'} title={'image'} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '7.5%',
    margin: 5,
  },
  textView: {
    justifyContent: 'flex-start',
    width: '50%',
  },
  textStyles: {
    fontFamily: 'Roboto',
    fontSize: 25,
  },
  toggleLanguageButton: {
    justifyContent: 'flex-end',
    width: '50%',
  },
  productCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
