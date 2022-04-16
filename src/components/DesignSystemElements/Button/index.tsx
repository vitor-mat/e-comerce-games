import React, { ReactNode } from 'react';

import * as S from './style';

interface Props{
  children: ReactNode;
  backgroundColor?: string;
  maxWidth?: string;
  margin?: string;
  marginTop?: number;
  onClick?: () => void
}

export const Button:React.FC<Props> = ({ children, maxWidth="100%", marginTop=0, onClick, backgroundColor, margin }) => {
  return(
    <S.Button
      maxWidth={maxWidth}
      marginTop={marginTop}
      onClick={onClick}
      backgroundColor={backgroundColor}
      margin={margin}
    >
      { children }
    </S.Button>
  )
}