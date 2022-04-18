import type { NextPage } from 'next';
import Head from 'next/head';

import React from 'react';

import { FullScreenContainer } from '../components/DesignSystemElements/FullScreenContainer';
import { Header } from '../components/DesignSystemElements/Header';
import { NavegationCart } from '../components/NavegationCart';
import { Flex } from '../components/DesignSystemElements/Flex';
import { Main } from '../components/DesignSystemElements/Main';
import { Card } from '../components/CardsIndexPage';
import { Footer } from '../components/DesignSystemElements/Footer';

import dataGames from '../database/games.json';

const Home: NextPage = () => {

  return (
    <FullScreenContainer>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <Main>
          <NavegationCart />
          <Flex
            alignItems="center"
            justifyContent="center"
          >
            {dataGames.map(dataGames => {
              return(
                <Card 
                  key={dataGames.id}
                  imgSrc={dataGames.image}
                  titleCard={dataGames.name}
                  priceCard={dataGames.price}
                  buyRouter={dataGames.routerForGamePage}
                />
              )
            })}
          </Flex>
        </Main>
        <Footer />
    </FullScreenContainer>
  )
}

export default Home
