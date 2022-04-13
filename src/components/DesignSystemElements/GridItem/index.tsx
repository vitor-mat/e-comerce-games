import React, { ReactNode } from 'react';

import * as S from './style';

interface PropsType{
  children: ReactNode;
  column: string;
  row: string;
}

export const GridItem: React.FC<PropsType> = ({ children, column, row}) => {
  return(
    <S.Container
      column={column}
      row={row}
    >
      {children}
    </S.Container>
  )
}