import Link from 'next/link';

import React from 'react';

import * as S from './style';

import { Button } from '../../DesignSystemElements/Button';

export const EmpytCart: React.FC = () => {
  return(
    <S.Container>
      <img src="/emoji-sad-icon.svg" alt="emoji sad" />
      <span>Seu carrinho está vazio.</span>
      <Link href="/">
        <a>
          <Button>
           Comprar Jogos
          </Button>
        </a>
      </Link>
    </S.Container>
  )
}