import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../consts';
// import { ReviewData, Coupon, OrderPostData } from '../types';

//! Файл для последующей реализации функционала отправки запроса на эндпоинт 'cancel/'
export const redirectToRoute = createAction<AppRoute>('site/redirectToRoute');
// export const postReview = createAction('site/postReview', (value: ReviewData) => ({ payload: value }));
// export const postCoupon = createAction('site/postCoupon', (value: Coupon) => ({ payload: value }));
// export const postOrder = createAction('site/postOrder', (value: OrderPostData) => ({ payload: value }));
