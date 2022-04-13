import styled from 'styled-components';

export const Container = styled.div`
  width: 180px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
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
`

export const CardPrice = styled.span`
  width: 100%;
  font-weight: 500;
`