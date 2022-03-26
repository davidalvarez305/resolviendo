import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {AMERICAN_FLAG, CUBAN_FLAG} from '../../assets/icons/Flags';
import {
  BLACK_PLUS_ICON,
  GREY_EYE_ICON,
  SEARCH_ICON,
  SECURITY_ICON,
  WHITE_PLUS_ICON,
} from '../../assets/icons/General';
import {LanguageContext} from '../context/LanguageContext';
import IconButton from '../ui/IconButton';
import ProductCard from '../ui/ProductCard';
import {FAKE_ITEMS} from '../utils/fakeData';
import Button from '../ui/Button';
import InputField from '../ui/InputField';
import Checkbox from '../ui/Checkbox';
import RadioButton from '../ui/RadioButton';
import Switch from '../ui/Switch';
import Label from '../ui/Label';

const Home: React.FC = () => {
  const {language, changeLanguage} = useContext(LanguageContext);
  const [checked, setChecked] = useState(false);
  const isSpanish = language === 'Spanish';
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.textStyles}>
            {isSpanish ? 'Inicial' : 'Home'}
          </Text>
        </View>
        <View style={styles.toggleLanguageButton}>
          <IconButton
            onPress={changeLanguage}
            icon={<SvgXml xml={isSpanish ? AMERICAN_FLAG : CUBAN_FLAG} />}
          />
        </View>
      </View>
      <Button
        onPress={() => console.log('pressed')}
        text={isSpanish ? 'Botón' : 'Button'}
        variant="solid"
        size="xl"
        rightIcon={<SvgXml xml={WHITE_PLUS_ICON} height="55%" width={'20%'} />}
      />
      <View style={{marginTop: 10}}>
        <InputField phoneInput keywordType="phone-pad" />
      </View>
      <View style={{ margin: 10 }}>
        <Checkbox isDisabled isChecked={checked} setChecked={setChecked} />
      </View>
      <View style={{ margin: 10 }}>
        <RadioButton isChecked={checked} setChecked={setChecked} />
      </View>
      <View style={{ margin: 10 }}>
        <Switch isDisabled isChecked={checked} setChecked={setChecked} />
      </View>
      <View style={{ margin: 10 }}>
        <Label isLink label="Write" />
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
    width: '10%',
    borderRadius: 100,
    overflow: 'hidden',
  },
  productCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  },
});

export default Home;
