import React from 'react';

import * as S from './style';

interface PropsType{
  showLoading: boolean;
}

export const LoadingIcon: React.FC<PropsType> = ({showLoading}) => {
  return(
    <S.LoadingIcon showLoading={showLoading} data-testId="loadingIcon" />
  )
}