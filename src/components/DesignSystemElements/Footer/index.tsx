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
        <S.LanguageContainer>
          <S.LanguageItem>
            <img src="/globe_icon.svg" alt="globe icon"/>
            <span>País/Região: Brasil</span>
          </S.LanguageItem>
        </S.LanguageContainer>
        <S.Hr />
        <S.MidiasAndTermsContainer>
          <S.SocialMidiaContainer>
            <img src="/instagram_icon.svg" alt="instagram icon"/>
            <img src="/facebook_icon.svg" alt="facebook icon"/>
            <img src="/twitter_icon.svg" alt="twitter icon"/>
          </S.SocialMidiaContainer>
          <S.TermsContainer>
            <Link href="/service-terms">
              <a>Termos de serviço</a>
            </Link>
            <Link href="/privacy-policy">
              <a>Política de privacidade</a>
            </Link>
          </S.TermsContainer>
        </S.MidiasAndTermsContainer>
      </S.MaxWidthSection>
    </S.Footer>
  )
}