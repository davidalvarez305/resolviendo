import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import OrdersProductCard from '../ui/OrdersProductCard';
import SecondaryLayout from '../layouts/SecondaryLayout';
import {LanguageContext} from '../context/LanguageContext';
import {LARGE_SEARCH_ICON} from '../../assets/icons/General';
import { COLORS } from '../theme';
import SettingsLayout from '../layouts/SettingsLayout';

interface Props {
    setShowOrders: React.Dispatch<React.SetStateAction<boolean>>;
}

const Orders: React.FC<Props> = ({ setShowOrders }) => {
  const {language} = useContext(LanguageContext);
  const isSpanish = language === 'Spanish';
  const orders = [
    {
      productName: 'Woman Bag DX',
      productPrice: 245.99,
      productSize: 'L',
      orderNumber: 21342,
      productImage:
        'https://static.nike.com/a/images/t_default/lvzcsilw4gmh2gi2hiq4/revolution-5-road-running-shoes-szF7CS.png',
    },
    {
      productName: 'Woman Bag DX',
      productPrice: 245.99,
      productSize: 'L',
      orderNumber: 21345,
      productImage:
        'https://www.downloadclipart.net/large/nike-shoes-png-transparent-image.png',
    },
  ];
  return (
    <SettingsLayout
      pageName={isSpanish ? 'Pedidos' : 'Orders'} onPress={() => setShowOrders(prev => !prev)}>
      <FlatList
        data={orders}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.cardContainer} onPress={() => console.log('go to order details')}>
            <OrdersProductCard {...item} />
          </TouchableOpacity>
        )}
      />
    </SettingsLayout>
  );
};

export default Orders;

const styles = StyleSheet.create({
    cardContainer: {
        paddingVertical: 20,
        borderBottomWidth: 6,
        borderBottomColor: COLORS.textColor.lightGrey,
    }
});
