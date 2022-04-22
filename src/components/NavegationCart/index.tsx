import Link from 'next/link';

import React from 'react';

import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

import * as S from './style';

export const NavegationCart = () => {

  const myCart = useSelector((state: RootState) => state.cart.value);

  return(
    <S.Container>
      <Link href="/cart">
        <a>
          <span>Carrinho</span>
          <img src="/cart-icon-black.svg" alt="cart icon" />
          {myCart.length ? <div className="numberOfItems" data-testId="numbeOfItemsInTheCart">{myCart.length}</div> : ""}
        </a>
      </Link>
    </S.Container>
  )
}