import React from 'react';
import {
  FlatList,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {
  SMALL_BLACK_BAG_ICON,
  GREY_CLOSE_ICON,
} from '../../assets/icons/General';
import {COLORS, FONTS} from '../theme';
import Button from '../ui/Button';
import HorizontalProductCard from '../ui/HorizontalProductCard';
import {ProductCardProps} from '../ui/ProductCard';

interface Props {
  products: ProductCardProps[];
  style?: StyleProp<ViewStyle>;
  numColumns?: number;
  onPress: () => void;
  buttonComponent: React.ReactElement;
}

const ProductList: React.FC<Props> = ({
  products,
  style,
  numColumns,
  onPress,
  buttonComponent
}) => {
  return (
    <View style={style}>
      <FlatList
        data={products}
        numColumns={numColumns ? numColumns : 1}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={onPress}
            style={{
              margin: 10,
            }}>
            <HorizontalProductCard
              {...item}
              button={
                buttonComponent
              }
              topRightIcon={<SvgXml xml={GREY_CLOSE_ICON} />}
            />
            <View
              style={{
                marginTop: 20,
                borderBottomColor: COLORS.textColor.mediumGrey,
                borderBottomWidth: 0.5,
              }}></View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductList;
