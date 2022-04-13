import React, { ReactNode } from 'react';

import * as S from './style';

interface PropsType{
  children: ReactNode;
}

export const Main: React.FC<PropsType> = ({ children }) => {
  return(
    <S.Main>
      <S.MaxWidthSection>
        {children}
      </S.MaxWidthSection>
    </S.Main>
  )
}