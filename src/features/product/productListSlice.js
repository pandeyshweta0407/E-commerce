import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProduct , fetchProductsByFilters} from './productListAPI';

const initialState = {
  products: [],
  status: 'idle',
};


export const fetchAllProductAsync = createAsyncThunk(
  'product /fetchAllProduct',
  async () => {
    const response = await fetchAllProduct();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const fetchProductsByFiltersAsync   = createAsyncThunk(
  'product / fetchProductsByFilters',
  async ({filter,sort , pagination }) => {
    const response = await fetchProductsByFilters(filter,sort , pagination);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productListSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    increment: (state) => {
     
      state.value += 1;
    },
    
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
  },
});

export const { increment } = productListSlice.actions;
export const selectAllProducts = (state) => state.product.products;
export default productListSlice.reducer;
