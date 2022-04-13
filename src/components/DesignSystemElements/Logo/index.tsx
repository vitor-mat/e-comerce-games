import Link from 'next/link';

import React from 'react';

import * as S from './style';

export const Logo: React.FC = () => {
  return(
    <S.Logo>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="logo icon"/>
          <h1>Supera</h1>
        </a>
      </Link>
    </S.Logo>
  )
}
