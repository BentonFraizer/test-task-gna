import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProducts1, getProducts2 } from '../../store/site-data/selectors';
import { Product } from '../../types';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const productsList1 = useAppSelector(getProducts1);
  const productsList2 = useAppSelector(getProducts2);
  const [productsList, setProductsList] = useState<Product[]>();

  useEffect(() => {
    if (productsList1.length !== 0 && productsList2.length !== 0) {
      setProductsList([...productsList1, ...productsList2]);
    }
  }, [productsList1, productsList2]);

  return (
    <div>
      <h1>This is a main page</h1>
      <ul>
        {productsList?.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MainScreen;
