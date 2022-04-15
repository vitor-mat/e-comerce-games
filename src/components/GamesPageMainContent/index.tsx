import Link from 'next/link';

import React from 'react';

import * as S from './style';

import { Flex } from '../DesignSystemElements/Flex';

interface PropsType{
  name: string;
  imgSrc: string;
  plataform: string;
  score: number;
  price: number
}

export const GamesPageMainContent: React.FC<PropsType> = ({ name, imgSrc, plataform, score, price }) => {

  const [showLoading, setShowLoading] = React.useState(false)
  const [isInTheCart, setIsInTheCart] = React.useState(false)

  const handleLoading = () => {
    if(isInTheCart == false){
      setShowLoading(true)
      setTimeout(() => {
        setShowLoading(false)
        setIsInTheCart(!isInTheCart)
      }, 4000)
    }
  }

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
          <S.AddToCartButton
            margin="0 0 10px"
            showLoading={showLoading}
            isInTheCart={isInTheCart}
            onClick={handleLoading}
          >
            <span className="addInTheCart">Adicionar ao carrinho</span>
            <Link href="/cart">
              <a className="seeInTheCart">Vizualizar no carrinho</a>
            </Link>
            <div className="loadIcon"></div>
          </S.AddToCartButton>
          <span>Preço: R${price}</span>
          <hr />
          <span>Plataforma: {plataform}</span>
          <hr />
          <span>Score: {score}</span>
        </S.SideBar>
      </Flex>
    </S.Container>
  )
}