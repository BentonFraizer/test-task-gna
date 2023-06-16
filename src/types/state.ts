import { store } from '../store/index';
import { Product } from './index';

export type SiteData = {
  productsList1: Product[];
  productsList2: Product[];
  isDataLoaded: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
