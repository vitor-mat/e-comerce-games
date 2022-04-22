import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartScice/cartSclice';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

import Games from '../pages/games/[id]';


function ClearReduxState(){


  return(
    <Games currentlyRouter="terra-media-sombras-de-mordor"/>
  )
}

function MockGames() {

  const store = configureStore({
    reducer: {
      cart: cartReducer
    }
  })

  return(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ClearReduxState />
      </ThemeProvider>
    </Provider>
  )
}

describe("adding products in the cart", () => {
  test("checking if the respective game is rendered", async () => {
    const { debug } = render(<MockGames />)
    const title = screen.getByText("Terra Média: Sombras de Mordor")
    expect(title).toBeVisible()
  })
  test("button starts with 'Adicionar ao carrinho'", async () => {
    const { debug } = render(<MockGames />)
    const addButton = screen.getByText("Adicionar ao carrinho")
    expect(addButton).toBeVisible()
  })
  test("after click on the add to cart button show loading icon animation", () => {
    const { debug } = render(<MockGames />)
    const addToCartButtonWrapper = screen.getByTestId("addToCartButtonWrapper")
    userEvent.click(addToCartButtonWrapper)
    const loadingIcon = screen.getByTestId("loadingIcon")
    expect(loadingIcon).toBeVisible()
  })
  test("button changes to 'Visualizar no carrinho' after the loading animation is ended", async () => {
    jest.useFakeTimers()
    const { debug } = render(<MockGames />)
    const addToCartButtonWrapper = screen.getByTestId("addToCartButtonWrapper")
    userEvent.click(addToCartButtonWrapper)
    jest.runAllTimers()
    expect(addToCartButtonWrapper).toBeVisible()
    jest.useRealTimers()
  })
  test("cart icon start whitout number appear", () => {
    const { debug } = render(<MockGames />)
    const numbeOfItemsInTheCart = screen.queryByTestId("numbeOfItemsInTheCart")
    expect(numbeOfItemsInTheCart).toBeNull()
  })
  test("one number appear fear the cart shown that exist an item in the cart after loading", () => {
    jest.useFakeTimers()
    const { debug } = render(<MockGames />)
    const addToCartButtonWrapper = screen.getByTestId("addToCartButtonWrapper")
    userEvent.click(addToCartButtonWrapper)
    jest.runAllTimers()
    const numbeOfItemsInTheCart = screen.queryByTestId("numbeOfItemsInTheCart")
    expect(numbeOfItemsInTheCart).toBeVisible()
    jest.useRealTimers() 
  })
})
