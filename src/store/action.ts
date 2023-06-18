import { createAction } from '@reduxjs/toolkit';
import { CancelData } from '../types';

export const postCancel = createAction('site/postCancel', (value: CancelData) => ({ payload: value }));
