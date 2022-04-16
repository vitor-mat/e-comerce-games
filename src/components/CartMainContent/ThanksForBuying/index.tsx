import Link from 'next/link';

import React from 'react';

import * as S from './style';

import { Button } from '../../DesignSystemElements/Button';

export const ThanksForBuying: React.FC = () => {
  return(
    <S.Container>
      <span>Obrigado por comprar!!</span>
      <Link href="/">
        <a>
          <Button>
           Encontre sua próxima aventura 
          </Button>
        </a>
      </Link>
    </S.Container>
  )
}