import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {LanguageContext} from '../context/LanguageContext';
import {COLORS, FONTS} from '../theme';
import Button from './Button';
interface OrdersProductCardProps {
  productName: string;
  productImage: string;
  productPrice: number;
  productSize: string;
  orderNumber: number;
}

const OrdersProductCard: React.FC<OrdersProductCardProps> = ({
  productName,
  productImage,
  productPrice,
  productSize,
  orderNumber,
}) => {
  const {language} = useContext(LanguageContext);
  const isSpanish = language === 'Spanish';
  return (
    <>
      <View style={styles.orderHeader}>
        <Text style={styles.orderNumberText}>{`INV #${orderNumber}`}</Text>
        <Text style={styles.orderDateText}>{'4/1/2022'}</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: productImage,
              height: 80,
              width: 80,
            }}
          />
        </View>
        <View style={{width: '85%'}}>
          <View style={styles.titleContainer}>
            <Text style={styles.productName}>{productName}</Text>
          </View>
          <View style={styles.details}>
            <View style={styles.productElements}>
              <Text
                style={{
                  ...styles.productPrice,
                  color: COLORS.primary.softPink,
                }}>
                $
              </Text>
              <Text style={styles.productPrice}> {productPrice}</Text>
            </View>
            <View style={styles.productElements}>
              <Text style={styles.productPrice}>{'Size: '}</Text>
              <Text
                style={{
                  ...styles.productPrice,
                  color: COLORS.primary.softPink,
                }}>
                {productSize}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.totalSection}>
        <Text style={styles.productName}>Total</Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{...styles.productPrice, color: COLORS.primary.softPink}}>
            $
          </Text>
          <Text style={styles.productPrice}>403.98</Text>
        </View>
      </View>
      <View style={styles.buttonsView}>
        <View style={styles.buttonContainer}>
          <Button
            variant="outlined"
            text={isSpanish ? 'Detalles' : 'Details'}
            onPress={() => console.log('pressed')}
            size="md"
            width={140}
            buttonLetterSpacing={-0.5}
            buttonBackgroundColor={'transparent'}
            outlinedBorderWidth={1}
            outlinedBorderColor={COLORS.textColor.mediumGrey}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            variant="solid"
            text={isSpanish ? 'Ingresar' : 'Ratings'}
            onPress={() => console.log('pressed')}
            size="md"
            width={140}
            buttonLetterSpacing={-0.5}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    flexDirection: 'row',
  },
  imageContainer: {
    borderRadius: 12,
    backgroundColor: COLORS.textColor.lightGrey,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productName: {
    fontFamily: FONTS.family.secondarySemiBold,
    fontWeight: '600',
    fontSize: FONTS.sizes.h3,
    color: COLORS.primary.black,
    letterSpacing: -0.5,
  },
  productElements: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  productSize: {
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
  totalSection: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopColor: COLORS.textColor.mediumGrey,
    borderTopWidth: 0.5,
    marginVertical: 5,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 5,
  },
  buttonsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderNumberText: {
    fontFamily: FONTS.family.primary,
    fontSize: FONTS.sizes.h3,
    color: COLORS.primary.black,
    letterSpacing: -0.5,
  },
  orderDateText: {
    fontFamily: FONTS.family.primary,
    fontSize: FONTS.sizes.h5,
    color: COLORS.primary.grey,
    letterSpacing: -0.5,
  },
  orderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
  },
});

export default OrdersProductCard;
