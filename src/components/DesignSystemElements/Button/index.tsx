import React, { ReactNode } from 'react';

import * as S from './style';

interface Props{
  children: ReactNode;
  backgroundColor?: string;
  maxWidth?: string;
  margin?: string;
  marginTop?: number;
  onClickFunction?: () => void
}

export const Button:React.FC<Props> = ({ children, maxWidth="100%", marginTop=0, onClickFunction, backgroundColor, margin }) => {
  return(
    <S.Button
      maxWidth={maxWidth}
      marginTop={marginTop}
      onClick={onClickFunction}
      backgroundColor={backgroundColor}
      margin={margin}
    >
      { children }
    </S.Button>
  )
}