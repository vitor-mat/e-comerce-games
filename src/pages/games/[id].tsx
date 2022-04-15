import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import React from 'react';

import dataGames from "../../database/games.json";

import { FullScreenContainer } from '../../components/DesignSystemElements/FullScreenContainer';
import { Header } from '../../components/DesignSystemElements/Header';
import { Main } from '../../components/DesignSystemElements/Main';
import { NavegationCart } from '../../components/NavegationCart';
import { GamesPageMainContent } from '../../components/GamesPageMainContent';
import { Footer } from '../../components/DesignSystemElements/Footer';

export const getStaticPaths: GetStaticPaths = async () => {

  const paths = dataGames.map(data => {
    return{
      params: {
        id: data.routerForGamePage
      }
    }
  })

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async (context: any) => {

  const currentlyRouter = await context.params.id

  return {
    props: {
      currentlyRouter
    },
  }
}

interface PropsType{
  currentlyRouter: string;
}

const Games: NextPage<PropsType> = ({ currentlyRouter }) => {

  const [myGame, setMyGame] = React.useState(dataGames.find(data => data.routerForGamePage == currentlyRouter) || dataGames[0])

  React.useEffect(() => {

  })

  return(
    <FullScreenContainer> 
      <Header />
      <Main>
        <NavegationCart />
        <GamesPageMainContent 
          name={myGame.name}
          imgSrc={myGame.image}
          plataform={myGame.plataform}
          score={myGame.score}
          price={myGame.price}
          id={myGame.id}
        />
      </Main> 
      <Footer />
    </FullScreenContainer>
  )
}

export default Games