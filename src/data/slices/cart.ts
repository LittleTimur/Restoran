import { createSlice, configureStore, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface Product {
  id: string;
  title: string;
  price: number;
  restoran: string;
  quantity: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [] as Product[]
  },
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<Product, 'quantity'>>) => {
      const existingProduct = state.products.find(
        product => product.id === action.payload.id && product.restoran === action.payload.restoran
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({
          ...action.payload,
          quantity: 1
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<Product['id']>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    decreaseQuantity: (state, action: PayloadAction<{id: string, restoran: string}>) => {
      const product = state.products.find(
        product => product.id === action.payload.id && product.restoran === action.payload.restoran
      );
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.products = state.products.filter(
            p => !(p.id === action.payload.id && p.restoran === action.payload.restoran)
          );
        }
      }
    },
    clearCart: (state) => {
      state.products = [];
    }
  }
})

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer

export const selectCart = (state: RootState) => state.cart
export const selectCartProducts = createSelector(selectCart, (state) => state.products)
export const selectCartTotal = createSelector(selectCartProducts, (products) =>
  products.reduce((total, product) => total + (product.price * product.quantity), 0)
)
export const selectCartItemsCount = createSelector(selectCartProducts, (products) =>
  products.reduce((count, product) => count + product.quantity, 0)
)
