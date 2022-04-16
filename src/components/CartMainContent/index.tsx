import React from 'react';

import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { addInTheCart } from '../../features/cartScice/cartSclice';

import { Button } from '../DesignSystemElements/Button';

import { CartCard } from './CartCard';
import { EmpytCart } from './EmptyCart';
import { ThanksForBuying } from './ThanksForBuying';

import * as S from './style';

export const CartMainContent: React.FC = () => {

  const myCart = useSelector((state: RootState) => state.cart.value);

  const [wasBouth, setWasBouth] = React.useState(true);

  const totalPriceParcial = myCart.map(value => {
    return (value.price * value.amount)
  })

  const discount = 0.00

  const totalPriceFinal = totalPriceParcial.length ? totalPriceParcial.reduce((acumulator, currentValue) => {
    return acumulator + currentValue
  }) : 0.00

  return (
    myCart.length ? 
    <S.Container>
      <h1>Meu Carrinho</h1>
      <S.CardsCartContainer>
        {myCart.map((data, index) => {
          return (
            <React.Fragment
              key={data.id}
            >
              <CartCard
                imgSrc={data.imgSrc}
                title={data.title}
                price={data.price}
                amount={data.amount}
              />
              <hr />
            </React.Fragment>
          )
        })}
      </S.CardsCartContainer>
      <S.CartSideBar>
        <h2>Resumo do pedido</h2>
        <span>{`Preço: R$ ${totalPriceFinal.toFixed(2).toString().replace(".", ",")}`}</span>
        <span>{`Desconto: R$ ${discount.toFixed(2).toString().replace(".", ",")}`}</span>
        <hr />
        <span className="subTotal">{`Subtotal: R$ ${(totalPriceFinal - discount).toFixed(2)}`}</span>
        <Button>
          Finalizar Pedido
        </Button>
      </S.CartSideBar>
    </S.Container> 
    : wasBouth ?
    <ThanksForBuying /> :
    <EmpytCart />
  )
}