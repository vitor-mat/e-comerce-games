import React from 'react';

import * as S from './style';

import { Flex } from '../DesignSystemElements/Flex';
import { Button } from '../DesignSystemElements/Button';

interface PropsType{
  name: string;
  imgSrc: string;
  plataform: string;
  score: number;
}

export const GamesPageMainContent: React.FC<PropsType> = ({ name, imgSrc, plataform, score }) => {
  return(
    <S.Container>
      <Flex
        alignItems="center"
        justifyContent="center"
      >
        <h1>{name}</h1>
      </Flex>
      <Flex
        alignItems="flex-start"
        justifyContent="center"
      >
        <div>
          <img src={imgSrc} alt="capa image"/>
        </div>
        <S.SideBar>
          <Button
            margin="0 0 10px"
          >
            Adicionar ao carrinho
          </Button>
          <span>Plataforma: {plataform}</span>
          <hr />
          <span>Score: {score}</span>
        </S.SideBar>
      </Flex>
    </S.Container>
  )
}