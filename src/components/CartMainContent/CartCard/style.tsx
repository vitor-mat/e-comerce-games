import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 180px;
  display: flex;

  img{
    width: 180px;
  }

  @media(max-width: 450px){
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height: auto;
    max-width: 180px;
  }
`

export const TitleMobile = styled.h2`
  display: none;

  @media(max-width: 450px){
    display: inline-block;
    font-size: 28px;
  }
`

export const CardDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media(max-width: 450px){
    display: flex;
    gap: 0px;
  }
`

export const HeaderCardDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h2{
    font-size: 28px;
  }

  span{
    font-weight: 500;
    font-size: 20px;
    line-height: 34px;
  }

  @media(max-width: 450px){
    display: flex;
    flex-direction: column;

    h2{
      display: none;
    }
  }
`

export const AmountContainer = styled.div`
  display: flex;
  gap: 10px;

  label{
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;
  }

  select{
    background: ${props => props.theme.colors.main};
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 100px;
    font-size: 16px;
    outline: none;
    height: 36px;
    cursor: pointer;
  }

  select:hover{
    outline: 2px solid #5381f3;
  }

  select:active{
    outline: 2px solid #5381f3;
  }
`

export const RemoveContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  align-self: flex-end;
  margin-top: 20px;
`

export const RemoveElement = styled.span`
  color: ${props => props.theme.colors.main};
  text-decoration: underline;
  cursor: pointer;
  font-size: 18px;
  text-align: right;

  &:hover{
    color: red;
  }
`