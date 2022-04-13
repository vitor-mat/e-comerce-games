import Link from 'next/link';

import React from 'react';

import * as S from './style';

import { Logo } from '../Logo';

export const Header: React.FC = () => {
  return(
    <S.Header>
      <S.MaxWidthSection>
        <Logo />
        <Link href="/">
          <a>Loja</a>
        </Link>
      </S.MaxWidthSection>
    </S.Header>
  )
}