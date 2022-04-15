import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.main};
`

export const ArrowUpIcon = styled.img`
  transform: rotateZ(180deg);
  width: 55px;
  cursor: pointer;

  @media(max-width: 310px){
    width: 40px;
  }
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media(max-width: 310px){
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const LanguageItem = styled.div`
  display flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  border-radius: 10px;
  margin: 5px 0px;
  img{
    width: 30px;
  }
  @media(max-width: 310px){
    font-size: 16px;
    img{
      width: 20px;
    }
  }
`

export const Hr = styled.hr`
  margin: 10px 0 20px; 
`

export const MidiasAndTermsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media(max-width: 480px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
        
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

  a{
    color: white;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
  }

  a:hover{
    text-decoration: underline;
  }

  @media(max-width: 320px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`