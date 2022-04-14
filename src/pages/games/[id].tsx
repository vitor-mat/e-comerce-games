import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import React from 'react';

import dataGames from "../../database/games.json";

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

  const ids = await context.params.id

  return {
    props: {
      ids
    }, // will be passed to the page component as props
  }
}

interface PropsType{
  ids: any;
}

const Games: NextPage<PropsType> = ({ ids }) => {
  React.useEffect(() => {
    console.log(ids)
  }, [])
  return(
    <div> 
      ola 
    </div>
  )
}

export default Games