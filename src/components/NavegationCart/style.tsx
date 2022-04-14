import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-end;

  a{
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    text-decoration: none;
    color: black;

    span{
      font-weight: 700;
      font-size: 20px;
    }
  
    img{
      width: 35px;
    }
  }
`