import React from 'react';
import { ReactNode } from 'react';

import * as S from './style';

interface PropsType{
  children: ReactNode;
}

export const FullScreenContainer: React.FC<PropsType> = ({ children }) => {
  return(
    <S.FullScreenContainer>
      {children}
    </S.FullScreenContainer>
  )
}