import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-top: 70px;

  span{
    font-size: 80px;
    opacity: .7;
    text-align: center;
    font-weight: 300;
  }

  @media(max-width: 500px){
    span{
      font-size: 40px;
    }
  }
`