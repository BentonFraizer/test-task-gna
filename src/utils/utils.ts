import { ProductKey, Product } from '../types';

// Функция добавоения ключа key для каждого из передаваемых объектов
export const addKey = (products: Product[]): ProductKey[] => products.map((product: Product, i: number) => ({ ...product, key: String(i) }));
