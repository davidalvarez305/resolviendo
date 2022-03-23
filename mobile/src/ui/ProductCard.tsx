import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {PRODUCT_CARD_STAR} from '../../assets/icons/Navigation';
interface ProductCardProps {
  name: string;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({name, title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.image}>
        <Image
          resizeMode="contain"
          source={{
            uri: 'https://cdn.southfloridaathleticclub.com/media/single/rawlings-heart-of-the-hide-infield-glove/rawlings_infield_baseball_glove_horizontal.webp',
          }}
        />
      </View>
      <View style={styles.textArea}>
        <View>
          <Text style={styles.productDetailsText['header']}>
            {'3070 RTX GPU'}
          </Text>
          <Text style={styles.productDetailsText}>{'$45 USD'}</Text>
          <View style={styles.productDetails}>
            <SvgXml xml={PRODUCT_CARD_STAR} height="75%" width="10%" />
            <Text style={styles.productDetailsText}>{'5 Rating'}</Text>
          </View>
          <Text style={styles.productDetailsText}>
            {'Guanabacoa, La Habana'}
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
    margin: 2
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
  productDetailsText: {
    header: {
      fontSize: 25,
      fontFamily: 'Roboto',
    },
    fontSize: 20,
    fontFamily: 'Roboto',
  },
});

export default ProductCard;
