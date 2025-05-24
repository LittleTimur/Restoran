import { createSlice, configureStore, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface Product {
  id: string;
  title: string;
  price: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [] as Product[]
  },
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<Product['id']>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer

export const selectCart = (state: RootState) => state.cart
export const selectCartProducts = createSelector(selectCart, (state) => state.products)
export const selectCartTotal = createSelector(selectCartProducts, (products) => products.reduce((total, product) => total + product.price, 0))
