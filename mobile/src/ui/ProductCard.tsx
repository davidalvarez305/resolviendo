import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {FILLED_STAR_ICON, YELLOW_STAR_ICON} from '../../assets/icons/General';
import {COLORS, FONTS} from '../theme';

export type ProductCardProps = {
  productName: string;
  productImage: string;
  productPrice: number;
  productRating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ productName, productImage, productPrice, productRating }) => {
  return (
    <TouchableOpacity style={styles.main}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: productImage,
            height: 215 * 0.8,
            width: 156,
          }}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.productName}>{productName}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 30,
        }}>
        <View style={styles.productElements}>
          <Text style={{...styles.productPrice, color: COLORS.primary.softPink}}>$</Text>
          <Text style={styles.productPrice}>{productPrice}</Text>
        </View>
        <View style={styles.productElements}>
          <SvgXml xml={YELLOW_STAR_ICON} />
          <Text style={styles.productRating}>{productRating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: 156,
  },
  imageContainer: {
    borderRadius: 12,
    backgroundColor: COLORS.textColor.lightGrey,
    height: 215,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productName: {
    fontFamily: FONTS.family.secondarySemiBold,
    fontWeight: '600',
    fontSize: FONTS.sizes.h2,
    color: COLORS.primary.black
  },
  productElements: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  productRating: {
    marginHorizontal: 10,
    fontSize: FONTS.sizes.h4,
    fontFamily: FONTS.family.primaryMedium,
    color: COLORS.textColor.grey,
  },
  productPrice: {
    fontSize: FONTS.sizes.h4,
    fontFamily: FONTS.family.primaryMedium,
    color: COLORS.textColor.black,
  },
});

export default ProductCard;
