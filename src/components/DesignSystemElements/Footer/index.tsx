import Link from 'next/link';

import React from 'react';

import * as S from './style';

import { Flex } from '../Flex';
import { Logo } from '../Logo';

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.MaxWidthSection>
        <Flex
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo />
          <a href="#header">
            <S.ArrowUpIcon src="/arrow-down-icon.svg" alt="arrow-down-icon" />
          </a>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="flex-end"
        >
          <S.LanguageContainer>
            <img src="/globe_icon.svg" alt="globe icon"/>
            <span>País/Região: Brasil</span>
          </S.LanguageContainer>
        </Flex>
        <S.Hr />
        <Flex
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <S.SocialMidiaContainer>
            <img src="/instagram_icon.svg" alt="instagram icon"/>
            <img src="/facebook_icon.svg" alt="facebook icon"/>
            <img src="/twitter_icon.svg" alt="twitter icon"/>
          </S.SocialMidiaContainer>
          <S.TermsContainer>
            <span>Termos de serviço</span>
            <span>Politica de privacidade</span>
          </S.TermsContainer>
        </Flex>
      </S.MaxWidthSection>
    </S.Footer>
  )
}