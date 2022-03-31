import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import SettingsLayout from '../layouts/SettingsLayout';
import ProductDetail from './ProductDetail';

const CategoryList: React.FC = ({}) => {
  const [showProductDetail, setShowProductDetail] = useState(false);
  const products = [
    {
      productName: 'Nike Shoe',
      productImage:
        'https://static.nike.com/a/images/t_default/lvzcsilw4gmh2gi2hiq4/revolution-5-road-running-shoes-szF7CS.png',
      productPrice: 213.99,
      productRating: 4.9,
    },
    {
      productName: 'Red Shoe',
      productImage:
        'https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png',
      productPrice: 43.99,
      productRating: 4.6,
    },
    {
      productName: 'Blue Shoe',
      productImage:
        'https://www.downloadclipart.net/large/nike-shoes-png-transparent-image.png',
      productPrice: 143.99,
      productRating: 4.5,
    },
    {
      productName: 'Nike Shoe',
      productImage:
        'https://static.nike.com/a/images/t_default/lvzcsilw4gmh2gi2hiq4/revolution-5-road-running-shoes-szF7CS.png',
      productPrice: 213.99,
      productRating: 4.9,
    },
    {
      productName: 'Red Shoe',
      productImage:
        'https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png',
      productPrice: 43.99,
      productRating: 4.6,
    },
    {
      productName: 'Blue Shoe',
      productImage:
        'https://www.downloadclipart.net/large/nike-shoes-png-transparent-image.png',
      productPrice: 143.99,
      productRating: 4.5,
    },
  ];

  if (showProductDetail) {
      return (
          <ProductDetail setShowProductDetail={setShowProductDetail} />
      )
  }

  return (
    <SettingsLayout pageName={'Category'} onPress={() => console.log('return to home page')} >
      <ProductList
        products={products}
        numColumns={2}
        onPress={() => setShowProductDetail(true)}
      />
    </SettingsLayout>
  );
};

export default CategoryList;
