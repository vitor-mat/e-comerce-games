import styled from 'styled-components';

interface ButtonType{
  maxWidth?: string;
  marginTop?: number;
  backgroundColor?: string;
  margin?: string;
}

export const Button = styled.button<ButtonType>`
  width: 100%;
  max-width: ${({maxWidth}) => maxWidth};
  height: 40px;
  color: white;
  border-radius: 5px;
  padding: 10px;
  border: none;
  outline: none;
  margin-top: ${({marginTop}) => marginTop}px;
  cursor: pointer;
  background: ${props => props.theme.colors.main};
  font-weight: 700;
  font-size: 16px;
  background: ${({backgroundColor}) => backgroundColor ? `${backgroundColor}` : ""};
  margin: ${({margin}) => margin ? `${margin}` : ""};

  &:hover{
    outline: 2px solid #5381f3;
  }

  &:active{
    opacity: .7;
  }
`