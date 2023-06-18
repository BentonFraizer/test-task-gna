import { ProductKey, Product } from '../types';

// Функция добавления ключа key для каждого из передаваемых объектов
export const addKey = (products: Product[]): ProductKey[] => products.map((product: Product, i: number) => ({ ...product, key: String(i) }));

// Функция для получения
export const getProduntsNames = (products: ProductKey[], keys: React.Key[]): string => {
  // eslint-disable-next-line array-callback-return
  const filteredProducts = products.filter((product) => {
    if (keys.includes(product.key)) {
      return product;
    }
  });

  const names = filteredProducts.map((product) => product.name.toLowerCase());

  const result = `${names.join(', ')}.`;
  return result;
};
