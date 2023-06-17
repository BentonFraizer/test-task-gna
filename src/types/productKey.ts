import React from 'react';

type Product = {
  key: React.Key;
  id: string;
  name: string;
  quantity: number;
  deliveryDate: string;
  price: number;
  currency: string;
};

export default Product;
