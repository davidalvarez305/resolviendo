import React, {useContext, useState} from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import {LARGE_SEARCH_ICON, SMALL_BLACK_BAG_ICON} from '../../assets/icons/General';
import HorizontalProductList from '../components/HorizontalProductList';
import {LanguageContext} from '../context/LanguageContext';
import SecondaryLayout from '../layouts/SecondaryLayout';
import { COLORS, FONTS } from '../theme';
import Button from '../ui/Button';
const Favorites: React.FC = ({}) => {
  const [showProductDetail, setShowProductDetail] = useState(false);
  const {language} = useContext(LanguageContext);
  const isSpanish = language === 'Spanish';
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
    {
      productName: 'Blue Shoe',
      productImage:
        'https://www.downloadclipart.net/large/nike-shoes-png-transparent-image.png',
      productPrice: 143.99,
      productRating: 4.5,
    },
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
    {
      productName: 'Blue Shoe',
      productImage:
        'https://www.downloadclipart.net/large/nike-shoes-png-transparent-image.png',
      productPrice: 143.99,
      productRating: 4.5,
    },
  ];
  return (
    <SecondaryLayout
      pageName={isSpanish ? 'Favoritos' : 'Favorites'}
      rightIcon={LARGE_SEARCH_ICON}>
      <HorizontalProductList
        buttonComponent={
          <Button
            variant="outlined"
            onPress={() => console.log('pressed')}
            text={'Add to Cart'}
            size={'sm'}
            outlinedBorderWidth={0.75}
            buttonBackgroundColor={'transparent'}
            outlinedBorderColor={COLORS.textColor.mediumGrey}
            fontFamily={FONTS.family.primary}
            fontSize={FONTS.sizes.h5}
            buttonLetterSpacing={-0.5}
            fontColor={COLORS.primary.black}
            fontWeight={'600'}
            leftIcon={
              <View style={{marginRight: 10}}>
                <SvgXml xml={SMALL_BLACK_BAG_ICON} />
              </View>
            }
          />
        }
        products={products}
        onPress={() => setShowProductDetail(true)}
      />
    </SecondaryLayout>
  );
};

export default Favorites;
