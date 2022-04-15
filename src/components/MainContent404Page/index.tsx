import React from 'react';

import * as S from './style';

export const MainConent404Page: React.FC = () => {
  return(
    <S.Container>
      <S.ImageContainer>
        <img src="/404-icon-black.svg" alt="404 icon" />
      </S.ImageContainer>
      <S.TextContainer>
        <span className="number-404">404|</span>
        <span>Está página não existe.</span>
      </S.TextContainer>
    </S.Container>
  )
}