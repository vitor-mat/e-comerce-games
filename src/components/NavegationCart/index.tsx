import Link from 'next/link';

import React from 'react';

import * as S from './style';

export const NavegationCart = () => {
  return(
    <S.Container>
      <Link href="/cart">
        <a>
          <span>Carrinho</span>
          <img src="/cart-icon-black.svg" alt="cart icon" />
        </a>
      </Link>
    </S.Container>
  )
}