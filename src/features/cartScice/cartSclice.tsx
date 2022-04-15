import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface cartState{
  value: {
    image: string;
    name: string;
    price: string;
    amount: string;
  }[];
}

interface actionType{
  image: string;
  name: string;
  price: string;
  amount: string;
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
    }
  }
})

export const { addInTheCart } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart.value
export default cartSlice.reducer