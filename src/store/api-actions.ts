import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Product } from '../types';
// import { redirectToRoute, postReview, postOrder } from './action';
import { APIRoute, AppRoute } from '../consts';
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
