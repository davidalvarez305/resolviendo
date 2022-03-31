import React, {useContext, useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {LARGE_SEARCH_ICON} from '../../assets/icons/General';
import HorizontalProductList from '../components/HorizontalProductList';
import {LanguageContext} from '../context/LanguageContext';
import SecondaryLayout from '../layouts/SecondaryLayout';
import {COLORS, FONTS} from '../theme';
import Button from '../ui/Button';
import InputField from '../ui/InputField';
import Label from '../ui/Label';

const Cart: React.FC = () => {
  const {language} = useContext(LanguageContext);
  const isSpanish = language === 'Spanish';
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  return (
    <SecondaryLayout
      pageName={isSpanish ? 'Carrito' : 'Shopping Cart'}
      rightIcon={LARGE_SEARCH_ICON}>
      <HorizontalProductList
        products={products}
        onPress={() => console.log('clicked')}
        buttonComponent={
          <View
            style={{
              flexDirection: 'row',
              width: '75%',
              justifyContent: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => setCount(count - 1)}
              style={styles.buttonStyles}>
              <Text style={styles.textStyles}>{'-'}</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.textStyles}>{count}</Text>
            </View>
            <TouchableOpacity
              onPress={() => setCount(count + 1)}
              style={styles.buttonStyles}>
              <Text style={styles.textStyles}>{'+'}</Text>
            </TouchableOpacity>
          </View>
        }
      />
      <View style={styles.inputContainer}>
        <View style={{width: '100%'}}>
          <InputField
            placeholder={
              isSpanish
                ? 'Ingrese Su Código de Promoción'
                : 'Enter Your Promo Code'
            }
            value={value}
            onChange={input => setValue(input)}
            fontFamily={FONTS.family.primary}
            fontSize={FONTS.sizes.h5}
            borderWidth={0.75}
            width={360}
            letterSpacing={-0.5}
          />
        </View>
      </View>
      <View style={styles.totalSection}>
        <Text style={styles.totalText}>Total: </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{...styles.productPrice, color: COLORS.primary.softPink}}>
            $
          </Text>
          <Text style={styles.productPrice}>
            {products.reduce(
              (total, current) => total + current.productPrice,
              0,
            )}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          variant="solid"
          text={isSpanish ? 'Continuar' : 'Continue'}
          onPress={() => console.log('pressed')}
          size="lg"
          width={340}
          buttonLetterSpacing={-0.5}
        />
      </View>
    </SecondaryLayout>
  );
};

export default Cart;

const styles = StyleSheet.create({
  textStyles: {
    fontFamily: FONTS.family.primary,
    color: COLORS.primary.black,
    fontSize: FONTS.sizes.h4,
  },
  buttonStyles: {
    height: 20,
    width: 20,
    borderColor: COLORS.textColor.mediumGrey,
    borderWidth: 0.5,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 5,
    alignItems: 'center',
    width: '100%',
    height: 100,
  },
  totalText: {
    fontFamily: FONTS.family.secondarySemiBold,
    fontSize: FONTS.sizes.h2,
    color: COLORS.primary.black,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  productPrice: {
    fontSize: FONTS.sizes.h4,
    fontFamily: FONTS.family.primaryMedium,
    color: COLORS.textColor.black,
  },
  totalSection: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

const products = [
  {
    productName: 'Nike Shoe',
    productImage:
      'https://static.nike.com/a/images/t_default/lvzcsilw4gmh2gi2hiq4/revolution-5-road-running-shoes-szF7CS.png',
    productPrice: 213.99,
    productRating: 4.9,
  },
  {
    productName: 'Red Shoe',
    productImage:
      'https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png',
    productPrice: 43.99,
    productRating: 4.6,
  },
];
