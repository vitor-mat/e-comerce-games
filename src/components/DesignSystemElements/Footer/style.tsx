import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.main};
`

export const MaxWidthSection = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const LanguageContainer = styled.div`
  display flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  border-radius: 10px;
  margin: 5px 0px;
  width: 300px;
  img{
    width: 30px;
  }
`

export const Hr = styled.hr`
  margin: 10px 0 20px; 
`

export const ArrowUpIcon = styled.img`
  transform: rotateZ(180deg);
  width: 55px;
  cursor: pointer;
`

export const SocialMidiaContainer = styled.div`
  display: flex;
  gap: 15px;
  
  img{
    cursor: pointer;
    width: 30px;
  }
`

export const TermsContainer = styled.div`
  display: flex;
  gap: 20px;

  span{
    color: white;
    cursor: pointer;
    font-size: 14px;
  }

  span:hover{
    text-decoration: underline;
  }
`