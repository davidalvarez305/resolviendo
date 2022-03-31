import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductCard from '../ui/ProductCard';
import SettingsLayout from '../layouts/SettingsLayout';

interface Props {
  setShowProductDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductDetail: React.FC<Props> = ({setShowProductDetail}) => {
  const data = {
    productName: 'Nike Shoe',
    productImage:
      'https://static.nike.com/a/images/t_default/lvzcsilw4gmh2gi2hiq4/revolution-5-road-running-shoes-szF7CS.png',
    productPrice: 213.99,
    productRating: 4.9,
  };
  return (
    <SettingsLayout pageName={data.productName} onPress={setShowProductDetail}>
      <ProductCard {...data} />
    </SettingsLayout>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
