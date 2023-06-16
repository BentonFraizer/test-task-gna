import { NameSpace } from '../../consts';
import { State } from '../../types/state';
import { Product } from '../../types';

export const getProducts1 = (state: State): Product[] => state[NameSpace.Data].productsList1;
export const getProducts2 = (state: State): Product[] => state[NameSpace.Data].productsList2;
export const getIsDataLoadedStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
