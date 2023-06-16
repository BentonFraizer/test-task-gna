import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { SiteData } from '../../types/state';
import { fetchProducts1Action, fetchProducts2Action } from '../api-actions';

const initialState: SiteData = {
  productsList1: [],
  productsList2: [],
  isDataLoaded: true,
};

export const siteData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts1Action.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchProducts1Action.fulfilled, (state, action) => {
        state.productsList1 = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchProducts2Action.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchProducts2Action.fulfilled, (state, action) => {
        state.productsList2 = action.payload;
        state.isDataLoaded = false;
      });
  },
});
