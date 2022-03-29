import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { GREY_CLOSE_ICON, SMALL_BLACK_BAG_ICON } from '../../assets/icons/General';
import { COLORS, FONTS } from '../theme';
import Button from '../ui/Button';
import HorizontalProductCard from '../ui/HorizontalProductCard';
import ProductCard from '../ui/ProductCard';

const Home: React.FC = () => {
  return (
    <>
      <ProductCard />
      <HorizontalProductCard
        button={
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
              <View style={{ marginRight: 10 }}>
                <SvgXml xml={SMALL_BLACK_BAG_ICON} />
              </View>
            }
          />
        }
        topRightIcon={<SvgXml xml={GREY_CLOSE_ICON} />}
      />
    </>
  );
};

export default Home;
