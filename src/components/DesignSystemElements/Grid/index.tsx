import React, { ReactNode } from 'react';

import * as S from './style';

interface PropsType{
  children: ReactNode;
  templateColumns: string;
  templateRows: string;
}

export const Grid: React.FC<PropsType> = ({children, templateColumns, templateRows}) => {
  return(
    <S.Container
      templateColumns={templateColumns}
      templateRows={templateRows}
    >
      {children}
    </S.Container>
  )
}