import styled from 'styled-components';

import { Button } from '../DesignSystemElements/Button/style';

export const Container = styled.div`
  width: 100%;

  h1{
    font-size: 40px;
    margin-bottom: 70px;
    font-weight: 400;
  }

  @media(max-width: 310px){
    h1{
      font-size: 24px;
      font-weight: 700;
      margin: 40px 0;
    }
  }
`

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  span{
    font-size: 18px;
    font-weight: 500;
  }
`

interface AddToCartButtonType{
  showLoading: boolean;
  isInTheCart: boolean;
}


export const AddToCartButton = styled(Button)<AddToCartButtonType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 0;
  ${props => props.isInTheCart ? "background: #5381f3;" : ""}

  &:hover{
    outline: 2px solid #5381f3;
  }

  &:active{
    opacity: .7;
  }

  .addInTheCart, .seeInTheCart{
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    &:active{
      opacity: .7;
    }
  }

  .addInTheCart{
    display: ${props => props.showLoading ? "none" : props.isInTheCart ? "none" : "flex"};
  }

  .seeInTheCart{
    color: white;
    text-decoration: none;
    display: ${props => props.showLoading ? "none" : props.isInTheCart ? "flex" : "none"};
  }

  @keyframes spin { 
    from{
      transform: rotate(0deg)
    }
    to{ 
        transform: rotate(360deg); 
    } 
}
`