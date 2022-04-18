import Link from 'next/link';

import React from 'react';

import * as S from './style';

import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { addInTheCart } from '../../features/cartScice/cartSclice';

import { Flex } from '../DesignSystemElements/Flex';
import { LoadingIcon } from '../LoadingIcon';

interface PropsType{
  name: string;
  imgSrc: string;
  plataform: string;
  score: number;
  price: number;
  id: number;
}

export const GamesPageMainContent: React.FC<PropsType> = ({ id, name, imgSrc, plataform, score, price }) => {

  const myCart = useSelector((state: RootState) => state.cart.value);

  const [showLoading, setShowLoading] = React.useState(false)
  const [isInTheCart, setIsInTheCart] = React.useState(!!myCart.find(data => data.title == name))
  const [cartItem, setCartItem] = React.useState({id: id, imgSrc: imgSrc, title: name, price: price, amount: 1})

  const dispatch = useDispatch();

  const handleLoading = () => {
    if(isInTheCart == false){
      setShowLoading(true)
      setTimeout(() => {
        setShowLoading(false)
        setIsInTheCart(!isInTheCart)
        dispatch(addInTheCart(cartItem))
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
            <span className="addInTheCart">
              Adicionar ao carrinho
            </span>
            <Link href="/cart">
              <a className="seeInTheCart">Vizualizar no carrinho</a>
            </Link>
            <LoadingIcon showLoading={showLoading} />
          </S.AddToCartButton>
          <span>Preço: R${price.toFixed(2).toString().replace(".", ",")}</span>
          <hr />
          <span>Plataforma: {plataform}</span>
          <hr />
          <span>Score: {score}</span>
        </S.SideBar>
      </Flex>
    </S.Container>
  )
}