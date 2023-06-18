import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { CancelData, Product } from '../types';
import { postCancel } from './action';
import { APIRoute } from '../consts';
// import { setDiscountValueInPercent } from '../store/site-data/site-data';

// Запрос всех товаров с эндпоинта '/document1'
export const fetchProducts1Action = createAsyncThunk<
  Product[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchProducts1', async (_arg, { extra: api }) => {
  const { data } = await api.get<Product[]>(APIRoute.Products1);
  return data;
});

// Запрос всех товаров с эндпоинта '/document2'
export const fetchProducts2Action = createAsyncThunk<
  Product[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchProducts2', async (_arg, { extra: api }) => {
  const { data } = await api.get<Product[]>(APIRoute.Products2);
  return data;
});

// Отправка списка идентификаторов товаров, которые необходимо аннулировать
export const cancelOrderAction = createAsyncThunk<
  void,
  CancelData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('site/postCancel', async ({ productsIds }, { dispatch, extra: api }) => {
  const { data } = await api.post<CancelData>(APIRoute.Cancel, { productsIds });
  console.log('hello');

  console.log('data', data);

  dispatch(postCancel(data));
});
