import styled from 'styled-components';

export const Logo = styled.div`
  a{
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    text-decoration: none;
    img{
      width: 50px;
      margin-top: 10px;
    }
    h1{
      font-size: 32px;
      color: white;
    }
  }

  
  @media(max-width: 310px){
    a{
      img{
        width: 40px;
      }
      h1{
        font-size: 24px;
      }
    }
  }
`