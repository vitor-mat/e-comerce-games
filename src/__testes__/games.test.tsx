import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import { store } from '../app/store';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

import Games from '../pages/games/[id]';


function MockGames() {
  return(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Games currentlyRouter="terra-media-sombras-de-mordor"/>
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
  test("button changes to 'Visualizar no carrinho' after click", async () => {
    jest.useFakeTimers()
    const { debug } = render(<MockGames />)
    const addToCartButtonWrapper = screen.getByTestId("addToCartButtonWrapper")
    userEvent.click(addToCartButtonWrapper)
    jest.runAllTimers()
    expect(addToCartButtonWrapper).toBeInTheDocument()
    jest.useRealTimers()
  })
})
