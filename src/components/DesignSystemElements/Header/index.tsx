import Link from 'next/link';

import React from 'react';

import * as S from './style';

export const Header: React.FC = () => {
  return(
    <S.Header>
      <S.MaxWidthSection>
        <h1>Supera</h1>
        <Link href="/">
          <a>Loja</a>
        </Link>
      </S.MaxWidthSection>
    </S.Header>
  )
}