import styled from 'styled-components';

export const Container = styled.div`
  width: 180px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  cursor: pointer;
  position: relative;
`

export const ImageContainer = styled.div`
  width: 180px;
  height: 180px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CardTItle = styled.span`
  width: 100%;
  font-weight: 500;
  text-align: center;
`

export const CardPrice = styled.span`
  width: 100%;
  font-weight: 500;
  text-align: center;
`

export const BuyButton = styled.button`
  background: ${props => props.theme.colors.main};
  color: white;
  font-weight: 700;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  cursor: pointer;
  transition: linear .3s;

  &:active{
    opacity: .7;
  }
`