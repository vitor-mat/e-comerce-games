import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Cart from '../pages/cart';
import Games from '../pages/games/[id]';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartScice/cartSclice';
import { useDispatch } from 'react-redux';
import { addInTheCart  } from '../features/cartScice/cartSclice';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

interface cartItemTypes{id: number; imgSrc: string; title: string; price: number; amount: number}

interface EnvironmentToManipulateCartStateTypes{
  cartItem?: cartItemTypes[]
}

const EnvironmentToManipulateCartState: React.FC<EnvironmentToManipulateCartStateTypes> = ({ cartItem = [] }) => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    if(cartItem.length > 0){
      cartItem.map(cartItemValue => {
        dispatch(addInTheCart(cartItemValue))
      })
    }
  },[])

  return(
    <Cart />
  )
}

interface MockCartType extends EnvironmentToManipulateCartStateTypes{}

const MockCart: React.FC<MockCartType> = ({ cartItem = [] }) => {

  const store = configureStore({
    reducer:{
      cart: cartReducer
    }
  })

  return(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <EnvironmentToManipulateCartState cartItem={cartItem} />
      </ThemeProvider>
    </Provider>
  )
}

describe("user interaction whit cart page", () => {
  test('if cart is empyt appear messsage for empyt cart', () => {
    const { debug } = render(<MockCart />)
    const empytCartMessage = screen.getByText("Seu carrinho está vazio.")
    expect(empytCartMessage).toBeInTheDocument()
  })
  test('show game card that exist in the cart', () => {
    const gamesItens: cartItemTypes[] = [{
      id: 0, 
      imgSrc: '/call-of-duty-wwii.png' ,
      title: 'call of duty', 
      price: 10, 
      amount: 1
    }]
    const { debug } = render(<MockCart cartItem={gamesItens} />)
    const cartCard = screen.getByTestId('cartCard')
    expect(cartCard).toBeInTheDocument()
  })
})