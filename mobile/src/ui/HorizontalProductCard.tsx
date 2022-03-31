import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {YELLOW_STAR_ICON} from '../../assets/icons/General';
import {COLORS, FONTS} from '../theme';
interface HorizontalProductCardProps {
  button: React.ReactElement;
  topRightIcon: React.ReactElement;
  productName: string;
  productImage: string;
  productPrice: number;
  productRating: number;
}

const HorizontalProductCard: React.FC<HorizontalProductCardProps> = ({
  button,
  topRightIcon,
  productName,
  productImage,
  productPrice,
  productRating,
}) => {
  return (
    <View style={styles.main}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: productImage,
            height: 105,
            width: 100,
          }}
        />
      </View>
      <View style={{width: '85%'}}>
        <View style={styles.titleContainer}>
          <Text style={styles.productName}>{productName}</Text>
          {topRightIcon}
        </View>
        <View style={styles.details}>
          <View style={styles.productElements}>
            <Text
              style={{...styles.productPrice, color: COLORS.primary.softPink}}>
              $
            </Text>
            <Text style={styles.productPrice}> {productPrice}</Text>
          </View>
          <View style={styles.productElements}>
            <SvgXml xml={YELLOW_STAR_ICON} />
            <Text style={styles.productRating}>{productRating}</Text>
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
          {button}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    flexDirection: 'row'
  },
  imageContainer: {
    borderRadius: 12,
    backgroundColor: COLORS.textColor.lightGrey,
    height: 125,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productName: {
    fontFamily: FONTS.family.secondarySemiBold,
    fontWeight: '600',
    fontSize: FONTS.sizes.h2,
    color: COLORS.primary.black,
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
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default HorizontalProductCard;
