import Link from 'next/link';

import React from 'react';

import * as S from './style';

interface PropsType{
  imgSrc: string;
  titleCard: string;
  priceCard: number;
  buyRouter: string;
}

export const Card: React.FC<PropsType> = ({ imgSrc, titleCard, priceCard, buyRouter }) => {

  return(
    <S.Container>
      <S.ImageContainer>
        <img src={imgSrc} alt="image card" />
      </S.ImageContainer>
      <S.CardTItle>
        {titleCard.length < 20 ? titleCard : `
          ${titleCard.slice(0, 16)}...
        `}
      </S.CardTItle>
      <S.CardPrice>
        R$ {priceCard}
      </S.CardPrice>
      <Link href={`/games/${buyRouter}`}>
        <a>
          <S.BuyButton>
          Comprar
          </S.BuyButton>
        </a>
      </Link>
    </S.Container>
  )
}