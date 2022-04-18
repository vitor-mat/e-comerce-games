import styled from 'styled-components';

import { Button } from '../DesignSystemElements/Button/style';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: 
                      "title title"
                      "CardsCartContainer CartSideBar";
  grid-template-columns: auto 300px;
  grid-template-rows: 50px auto;
  gap: 50px;
  h1{
    width: 100%;
    font-weight: 400;
    font-size: 40px;
    grid-area: title;
  }

  @media(max-width: 1030px){
    grid-template-areas: 
                    "title"
                    "CardsCartContainer"
                    "CartSideBar";
    grid-template-columns: 100%;
    grid-template-rows: 100px auto 250px;
  }
`

export const CardsCartContainer = styled.div`
  grid-area: CardsCartContainer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`

export const CartSideBar = styled.div`
  grid-area: CartSideBar;
  height: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2{
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  hr{
    margin: 10px 0;
  }

  span{
    font-weight: 600;
  }

  .subTotal{
    font-size: 20px;
    margin-bottom: 10px;
  }
`

export const FinishOrderButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`