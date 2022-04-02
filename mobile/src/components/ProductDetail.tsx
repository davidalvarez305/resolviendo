import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import SettingsLayout from '../layouts/SettingsLayout';
import {COLORS, FONTS} from '../theme';
import {SvgXml} from 'react-native-svg';
import {HEART_ICON, YELLOW_STAR_ICON} from '../../assets/icons/General';
import Button from '../ui/Button';
import {LanguageContext} from '../context/LanguageContext';

interface Props {
  setShowProductDetail: React.Dispatch<React.SetStateAction<boolean>>;
  productName: string;
}

const ProductDetail: React.FC<Props> = ({
  setShowProductDetail,
  productName,
}) => {
  const {language} = useContext(LanguageContext);
  const isSpanish = language === 'Spanish';

  const heartIcon = () => {
    return (
      <TouchableOpacity
        style={{position: 'absolute', right: 0.5, top: '45%'}}
        onPress={() => console.log('add to cart')}>
        <SvgXml xml={HEART_ICON} />
      </TouchableOpacity>
    );
  };

  return (
    <SettingsLayout
      pageName={'Detail'}
      onPress={setShowProductDetail}
      rightIcon={heartIcon()}>
      <View style={styles.main}>
        <Image
          style={styles.imageContainer}
          source={{
            uri: 'https://cdn.southfloridaathleticclub.com/media/single/schwinn-gtx-3/schwinn_gtx_3.webp',
          }}
        />
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.productName}>{productName}</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    ...styles.productPrice,
                    color: COLORS.primary.softPink,
                  }}>
                  $
                </Text>
                <Text style={styles.productPrice}>213.88</Text>
              </View>
              <View style={styles.ratingsAndReviews}>
                <View style={{flexDirection: 'row'}}>
                  <SvgXml xml={YELLOW_STAR_ICON} />
                  <Text style={styles.ratingsAndReviewsText}>4.9</Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text
                    style={{
                      ...styles.ratingsAndReviewsText,
                      fontSize: FONTS.sizes.h6,
                    }}>
                    / 25 reviews
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{width: '100%', marginVertical: 10, alignItems: 'center'}}>
          <Text style={styles.productDescriptionHeader}>
            {isSpanish ? 'Descripción' : 'Description'}
          </Text>
          <Text style={styles.productDescriptionText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quia
            iste debitis expedita, nihil excepturi ex assumenda doloribus rerum
            quidem eius adipisci sint, quasi tempore, libero deleniti quo itaque
            perspiciatis.
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => console.log('add to cart')}
              text={isSpanish ? 'Añadir al carrito' : 'Add to cart'}
              variant={'solid'}
              size={'lg'}
              width={280}
              buttonLetterSpacing={-0.5}
            />
          </View>
        </View>
      </View>
    </SettingsLayout>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    height: 362,
    width: 327,
    borderRadius: 12,
    overflow: 'hidden',
  },
  detailsContainer: {
    width: '100%',
    height: 75,
    alignItems: 'center',
    borderBottomColor: COLORS.textColor.mediumGrey,
    borderBottomWidth: 0.75,
  },
  productName: {
    fontSize: FONTS.sizes.h1,
    fontFamily: FONTS.family.secondarySemiBold,
    color: COLORS.primary.black,
  },
  productPrice: {
    fontSize: FONTS.sizes.h4,
    fontFamily: FONTS.family.primaryMedium,
    color: COLORS.textColor.black,
  },
  ratingsAndReviews: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  ratingsAndReviewsText: {
    marginHorizontal: 10,
    fontSize: FONTS.sizes.h4,
    fontFamily: FONTS.family.primaryMedium,
    color: COLORS.textColor.grey,
  },
  productDescriptionHeader: {
    fontFamily: FONTS.family.primaryMedium,
    fontSize: FONTS.sizes.h4,
    letterSpacing: -0.5,
    color: COLORS.primary.black,
  },
  productDescriptionText: {
    fontFamily: FONTS.family.primary,
    fontSize: FONTS.sizes.h6,
    letterSpacing: -0.5,
    color: COLORS.primary.grey,
    lineHeight: 21,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
