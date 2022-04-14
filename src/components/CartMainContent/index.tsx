import React from 'react';

import dataGames from '../../database/games.json';

import { CartCard } from './CartCard';
import { Button } from '../DesignSystemElements/Button';

import * as S from './style';

export const CartMainContent: React.FC = () => {
  return(
    <S.Container>
      <h1>Meu Carrinho</h1>
      <S.CardsCartContainer>
        {dataGames.map(data => {
          return(
            <>
              <CartCard 
                key={data.id}
                imgSrc={data.image}
                title={data.name}
                price={data.price}
              />
              <hr />
            </>
          )
        })}
      </S.CardsCartContainer>
      <S.CartSideBar>
        <h2>Resumo do pedido</h2>
        <span>Preço: R$78,00</span>
        <span>Desconto: R$0,00</span>
        <hr />
        <span className="subTotal">Subtotal: R$78,00</span>
        <Button>
          Finalizar Pedido
        </Button>
      </S.CartSideBar>
    </S.Container>
  )
}