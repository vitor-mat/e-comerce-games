import React from 'react';

import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { addInTheCart } from '../../features/cartScice/cartSclice';

import { CartCard } from './CartCard';
import { Button } from '../DesignSystemElements/Button';

import * as S from './style';

export const CartMainContent: React.FC = () => {

  const myCart = useSelector((state: RootState) => state.cart.value);

  return(
    <S.Container>
      <h1>Meu Carrinho</h1>
      <S.CardsCartContainer>
        {myCart.map(data => {
          return(
            <>
              <CartCard 
                key={data.id}
                imgSrc={data.imgSrc}
                title={data.title}
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