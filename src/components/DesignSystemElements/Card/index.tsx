import React from 'react';

import * as S from './style';

interface PropsType{
  imgSrc: string;
  titleCard: string;
  priceCard: number;
}

export const Card: React.FC<PropsType> = ({ imgSrc, titleCard, priceCard }) => {
  return(
    <S.Container>
      <S.ImageContainer>
        <img src={imgSrc} alt="image card" />
      </S.ImageContainer>
      <S.CardTItle>
        {titleCard}
      </S.CardTItle>
      <S.CardPrice>
        R$ {priceCard}
      </S.CardPrice>
      <S.BuyButton>
        Comprar
      </S.BuyButton>
    </S.Container>
  )
}