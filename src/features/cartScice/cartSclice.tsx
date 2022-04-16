import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface cartState{
  value: {
    id: number;
    imgSrc: string;
    title: string;
    price: number;
    amount: number;
  }[];
}

interface actionType{
  id: number;
  imgSrc: string;
  title: string;
  price: number;
  amount: number;
}

const initialState: cartState = {
  value: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addInTheCart(state, action: PayloadAction<actionType>){
      state.value.push(action.payload)
    },
    clearAllCart(state){
      state.value = []
    },
    updateCartValue(state, action: PayloadAction<actionType[]>){
      state.value.push(...action.payload)
    }
  }
})

export const { addInTheCart, clearAllCart, updateCartValue } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart.value
export default cartSlice.reducer