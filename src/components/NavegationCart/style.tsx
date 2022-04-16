import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  padding-right: 30px;

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

  .numberOfItems{
    min-width: 30px;
    height: 25px;
    background: ${props => props.theme.colors.main};
    color: white;
    font-weight: 700;
    font-size: 18px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
`