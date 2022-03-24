import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
import { FILLED_STAR_ICON } from '../../assets/icons/General';
import {FONTS} from '../theme';
interface ProductCardProps {
  imageSource: string;
  productName: string;
  productPrice: string;
  productRating: number;
  city: string;
  province: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSource,
  productName,
  productPrice,
  productRating,
  city,
  province,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.image}>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: imageSource,
          }}
        />
      </View>
      <View style={styles.textArea}>
        <View>
          <Text style={styles.productDetailsHeader}>{productName}</Text>
          <Text style={styles.productDetailsText}>{productPrice}</Text>
          <View style={styles.productDetails}>
            <SvgXml xml={FILLED_STAR_ICON} height="75%" width="10%" />
            <Text
              style={
                styles.productDetailsText
              }>{`${productRating} Rating`}</Text>
          </View>
          <Text style={styles.productDetailsText}>
            {`${city}, ${province}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    borderRadius: 50,
    borderWidth: 1,
    margin: 2,
  },
  image: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textArea: {
    flex: 2,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  productDetailsHeader: {
    fontSize: FONTS.sizes.h1,
    fontFamily: FONTS.family.primary,
    fontWeight: FONTS.weight.bold,
  },
  productDetailsText: {
    fontSize: 20,
    fontFamily: 'Roboto',
  },
});

export default ProductCard;
