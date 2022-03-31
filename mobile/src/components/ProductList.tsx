import React from 'react';
import {FlatList, StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import ProductCard, {ProductCardProps} from '../ui/ProductCard';

interface Props {
  products: ProductCardProps[];
  style?: StyleProp<ViewStyle>;
  numColumns?: number;
  onPress: () => void;
}

const ProductList: React.FC<Props> = ({products, style, numColumns, onPress}) => {
  return (
      <View style={style}>
      <FlatList
        data={products}
        numColumns={numColumns ? numColumns : undefined}
        renderItem={({item}) => (
          <TouchableOpacity onPress={onPress} style={{margin: 10}}>
            <ProductCard {...item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductList;
