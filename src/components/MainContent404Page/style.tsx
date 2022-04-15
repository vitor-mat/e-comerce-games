import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 100px 5px; 
  position: relative;
  
`

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 400px;
    opacity: .7;
  }

  @media(max-width: 500px){
    img{
      width: 250px;
    }
  }
`

export const TextContainer = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 50px;
  font-weight: 700;

  span{
    font-size: 32px;
    opacity: .7;
  }

  .number-404{
    font-size: 56px;
  }

  @media(max-width: 500px){
    width: 250px;

    span{
      font-size: 24px;
      opacity: .7;
    }
  
    .number-404{
      font-size: 32px;
    }
  }
`