import React from 'react';

import { RootState } from '../../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { addInTheCart, clearAllCart, updateCartValue  } from '../../../features/cartScice/cartSclice';

import * as S from './style';

interface PropsType {
  imgSrc: string;
  title: string;
  price: number;
  amount: number;
}

export const CartCard: React.FC<PropsType> = ({ imgSrc, title, price, amount }) => {

  const myCart = useSelector((state: RootState) => state.cart.value);

  const [selectValue, setSelectValue] = React.useState<number>(amount)

  const dispatch = useDispatch()

  const removeItemFromCart = (itemTitle: string) => {
    if(myCart.length){
      const remainigCartItems = myCart.filter((cartItem) => cartItem.title !== itemTitle)
      dispatch(clearAllCart())
      dispatch(updateCartValue(remainigCartItems))
    }
  }

  const updateAmoutItensOfAGame = (itemTitle: string, newAmount: number) => {

    if(myCart.length){
      const cartDataCopy = myCart.map(cartItem => {
        if(cartItem.title === itemTitle){
          return{
            id: cartItem.id,
            imgSrc: cartItem.imgSrc,
            title: cartItem.title,
            price: cartItem.price,
            amount: newAmount
          }
        }
        return cartItem
      })
      dispatch(clearAllCart())
      dispatch(updateCartValue(cartDataCopy))
    }
  }

  return (
    <S.Container>
      <S.TitleMobile>{title}</S.TitleMobile>
      <img src={imgSrc} alt="capa game" />
      <S.CardDescriptionContainer>
        <S.HeaderCardDescription>
          <h2>{title}</h2>
          <span>R${price.toFixed(2).toString().replace(".", ",")}</span>
        </S.HeaderCardDescription>
        <S.AmountContainer>
          <label>Qtd:</label>
          <select value={selectValue} onChange={e => {
            console.log(e.target.value)
            setSelectValue(Number(e.target.value))
            updateAmoutItensOfAGame(title, Number(e.target.value))
          }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index) => {
              return (
                <option key={index} value={value}>{value}</option>
              )
            })}
          </select>
        </S.AmountContainer>
        <S.RemoveContainer>
          <S.RemoveElement
            onClick={() => removeItemFromCart(title)}
          >
            Remover
          </S.RemoveElement>
        </S.RemoveContainer>
      </S.CardDescriptionContainer>
    </S.Container>
  )
}