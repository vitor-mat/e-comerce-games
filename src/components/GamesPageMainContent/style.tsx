import styled from 'styled-components';

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