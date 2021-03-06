import React from 'react';

import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { clearAllCart } from '../../features/cartScice/cartSclice';

import { LoadingIcon } from '../LoadingIcon';

import { CartCard } from './CartCard';
import { EmpytCart } from './EmptyCart';
import { ThanksForBuying } from './ThanksForBuying';

import * as S from './style';

export const CartMainContent: React.FC = () => {

  const myCart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch()

  const [wasBouth, setWasBouth] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(false)

  const totalPriceParcial = myCart.map(value => {
    return (value.price * value.amount)
  })

  const discount = 0.00

  const totalPriceFinal = totalPriceParcial.length ? totalPriceParcial.reduce((acumulator, currentValue) => {
    return acumulator + currentValue
  }) : 0.00

  const handleLoading = () => {
    setShowLoading(true)
    setTimeout(() => {
      finishOrder()
    }, 4000)
  }

  const finishOrder = () => {
    setWasBouth(true)
    dispatch(clearAllCart())
  }

  return (
    myCart.length ? 
    <S.Container>
      <h1>Meu Carrinho</h1>
      <S.CardsCartContainer>
        {showLoading ? 
          <span className="processing-payment">Processando pagamento...</span> :
          myCart.map((data, index) => {
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
          })
        }
      </S.CardsCartContainer>
      <S.CartSideBar>
        <h2>Resumo do pedido</h2>
        <span>{`Preço: R$ ${totalPriceFinal.toFixed(2).toString().replace(".", ",")}`}</span>
        <span>{`Desconto: R$ ${discount.toFixed(2).toString().replace(".", ",")}`}</span>
        <hr />
        <span className="subTotal">{`Subtotal: R$ ${(totalPriceFinal - discount).toFixed(2)}`}</span>
        <S.FinishOrderButton onClick={handleLoading}>
          {showLoading ? 
            <LoadingIcon showLoading={showLoading} /> :
            <span>Finalizar Pedido</span>
          }
        </S.FinishOrderButton>
      </S.CartSideBar>
    </S.Container> 
    : wasBouth ?
    <ThanksForBuying /> :
    <EmpytCart />
  )
}