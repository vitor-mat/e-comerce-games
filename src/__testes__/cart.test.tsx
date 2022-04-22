import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Cart from '../pages/cart';
import Games from '../pages/games/[id]';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartScice/cartSclice';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const MockCart = () => {

  const store = configureStore({
    reducer:{
      cart: cartReducer
    }
  })

  return(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Games currentlyRouter="terra-media-sombras-de-mordor"/>
        <Cart />
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
})