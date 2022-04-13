import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.main}
`

export const MaxWidthSection = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  gap: 40px;

  h1{
    color: white;
    font-weight: 700;
  }

  a{
    color: white;
    text-decoration: none;
    font-weight: 300;
    font-size: 20px;
  }
`