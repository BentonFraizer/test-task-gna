/* eslint-disable array-callback-return */
import { ProductKey, Product } from '../types';

// Функция добавления ключа key для каждого из передаваемых объектов
export const addKey = (products: Product[]): ProductKey[] => {
  const produvtsWithKeys = products.map((product: Product, i: number) => ({ ...product, key: String(i) }));
  return produvtsWithKeys.map((product) => ({ ...product, deliveryDate: product.deliveryDate.slice(0, 10) }));
};

// Функция для получения наименований выбранных товаров в виде строки
export const getProduntsNames = (products: ProductKey[], keys: React.Key[]): string => {
  const filteredProducts = products.filter((product) => {
    if (keys.includes(product.key)) {
      return product;
    }
  });

  const names = filteredProducts.map((product) => product.name.toLowerCase());

  return `${names.join(', ')}?`;
};

// Функция получения массива идентификаторов продуктов, которые необходимо аннулировать
export const getProductsIds = (products: ProductKey[], keys: React.Key[]): (string | undefined)[] => {
  const filteredProducts = products.filter((product) => {
    if (keys.includes(product.key)) {
      return product;
    }
  });

  return filteredProducts.map((product) => product.id);
};
