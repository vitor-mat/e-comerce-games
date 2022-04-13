import React from 'react';

import * as S from './style';

export const Card: React.FC = () => {
  return(
    <S.Container>
      <S.ImageContainer>
        <img src="" alt="" />
      </S.ImageContainer>
      <S.CardTItle>
        Terra Média: Sombras de Mordor
      </S.CardTItle>
      <S.CardPrice>
        R$ 79.99
      </S.CardPrice>
    </S.Container>
  )
}