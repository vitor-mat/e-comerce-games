import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;

  h1{
    font-size: 48px;
    font-weight: 300;
  }

  p{
    max-width: 1000px;
    font-size: 18px;
    line-height: 30px;
  }

  @media(max-width: 500px){
    h1{
      font-size: 32px;
    }

    p{
      font-size: 14px;
    }
  }
`