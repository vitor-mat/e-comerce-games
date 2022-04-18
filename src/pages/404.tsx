import { NextPage } from 'next';

import { FullScreenContainer } from '../components/DesignSystemElements/FullScreenContainer';
import { Header } from '../components/DesignSystemElements/Header';
import { NavegationCart } from '../components/NavegationCart';
import { Main } from '../components/DesignSystemElements/Main';
import { MainConent404Page } from '../components/Page404MainContent';
import { Footer } from '../components/DesignSystemElements/Footer';

const Cart: NextPage = () => {
  return(
    <FullScreenContainer> 
      <Header />
      <Main>
        <NavegationCart />
        <MainConent404Page />
      </Main> 
      <Footer />
    </FullScreenContainer>
  )
}

export default Cart