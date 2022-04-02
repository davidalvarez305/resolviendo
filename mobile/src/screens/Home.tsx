import React, { useState } from 'react';
import ProductDetail from '../components/ProductDetail';

const Home: React.FC = () => {
  const [showProductDetail, setShowProductDetail] = useState(false);
  return (
    <ProductDetail productName={'Schwinn Bike'} setShowProductDetail={setShowProductDetail} />
  );
};

export default Home;
