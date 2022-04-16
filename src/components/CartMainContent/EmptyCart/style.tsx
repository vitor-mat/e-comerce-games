import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-top: 20px;
  
  img{
    width: 250px;
    opacity: .7;
  }

  span{
    font-size: 40px;
    opacity: .7;
    text-align: center;
    font-weight: 500;
  }

  @media(max-width: 500px){
    img{
      width: 150px;
    }
  
    span{
      font-size: 32px;
    }
  }
`