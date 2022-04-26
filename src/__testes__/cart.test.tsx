import React from 'react';

import { render, screen, act } from '@testing-library/react';
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

const gameItem = [{
  id: 0, 
  imgSrc: '/call-of-duty-wwii.png' ,
  title: 'call of duty', 
  price: 10, 
  amount: 1
},
{
  id: 1, 
  imgSrc: '/call-of-duty-wwii.png' ,
  title: 'call of duty', 
  price: 10, 
  amount: 1
}]

describe("user interaction whit cart page (cart items)", () => {
  test('if cart is empyt appear messsage for empyt cart', () => {
    const { debug } = render(<MockCart />)
    const empytCartMessage = screen.getByText("Seu carrinho está vazio.")
    expect(empytCartMessage).toBeInTheDocument()
  })
  test('show game card that exist in the cart', () => {
    const gamesItens: cartItemTypes[] = []
    gamesItens.push(gameItem[0])
    const { debug } = render(<MockCart cartItem={gamesItens} />)
    const cartCard = screen.getByTestId('cartCard')
    expect(cartCard).toBeInTheDocument()
  })
  test('user can remove items from the cart', () => {
    const gamesItens: cartItemTypes[] = []
    gamesItens.push(gameItem[0])
    const { debug } = render(<MockCart cartItem={gamesItens} />)
    const cartCard = screen.getByTestId('cartCard')
    const removeItem = screen.getByText('Remover')
    userEvent.click(removeItem)
    expect(cartCard).not.toBeInTheDocument()
  })
})

describe("user interaction whit cart page (order resume)", () => {
  test("exist one item in the cart and from begging the price show in order resume is the price of the game in the cart", () => {
    const gamesItens: cartItemTypes[] = []
    gamesItens.push(gameItem[0])
    const { debug } = render(<MockCart cartItem={gamesItens} />)
    const priceFromOrder = screen.getByText('Preço: R$ 10,00')
    expect(priceFromOrder).toBeInTheDocument()
  })
  test("if exist more than one item in the cart the price in order resume is the sum of the price of the items", () => {
    const gamesItens: cartItemTypes[] = []
    gamesItens.push(gameItem[0])
    gamesItens.push(gameItem[1])
    const { debug } = render(<MockCart cartItem={gamesItens} />)
    const priceFromOrder = screen.getByText('Preço: R$ 20,00')
    expect(priceFromOrder).toBeInTheDocument()
  })
  test("the change in the amount of one item change the final price ", () => {
    const gamesItens: cartItemTypes[] = []
    gamesItens.push(gameItem[0])
    const { debug } = render(<MockCart cartItem={gamesItens} />)
    const selectAmountGamesItens = screen.getByTestId("selectAmountGamesItens")
    act(() => userEvent.selectOptions(selectAmountGamesItens, ['4']))
    const priceFromOrder = screen.getByText('Preço: R$ 40,00')
    expect(priceFromOrder).toBeInTheDocument()
  })
  test("button to finish order starts as finalizar pedido", () => {
    const gamesItens: cartItemTypes[] = []
    gamesItens.push(gameItem[0])
    const { debug } = render(<MockCart cartItem={gamesItens} />)
    const finishTheOrder = screen.getByText("Finalizar Pedido")
    expect(finishTheOrder).toBeInTheDocument()
  })
})

describe("user interaction whit cart page (finalizing order)", () => {
  test("some test", () => {
    expect(1+1).toBe(2)
  })
})