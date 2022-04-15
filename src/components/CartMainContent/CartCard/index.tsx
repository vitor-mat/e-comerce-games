import React from 'react';

import * as S from './style';

interface PropsType {
  imgSrc: string;
  title: string;
  price: number;
}

export const CartCard: React.FC<PropsType> = ({ imgSrc, title, price }) => {

  const [amount, setAmount] = React.useState<number | string>()

  return (
    <S.Container>
      <S.TitleMobile>{title}</S.TitleMobile>
      <img src={imgSrc} alt="capa game" />
      <S.CardDescriptionContainer>
        <S.HeaderCardDescription>
          <h2>{title}</h2>
          <span>R${price}</span>
        </S.HeaderCardDescription>
        <S.AmountContainer>
          <label>Qtd:</label>
          <select value={amount} onChange={e => {
            setAmount(e.target.value)
            console.log(e.target.value)
          }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index) => {
              return (
                <option key={index} value={value}>{value}</option>
              )
            })}
          </select>
        </S.AmountContainer>
        <S.RemoveContainer>
          <S.RemoveElement>Remover</S.RemoveElement>
        </S.RemoveContainer>
      </S.CardDescriptionContainer>
    </S.Container>
  )
}