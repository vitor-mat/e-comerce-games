import { NextPage } from 'next';

import { FullScreenContainer } from '../components/DesignSystemElements/FullScreenContainer';
import { Header } from '../components/DesignSystemElements/Header';
import { NavegationCart } from '../components/NavegationCart';
import { Main } from '../components/DesignSystemElements/Main';
import { CartMainContent } from '../components/CartMainContent';
import { Footer } from '../components/DesignSystemElements/Footer';

const Cart: NextPage = () => {
  return(
    <FullScreenContainer> 
      <Header />
      <Main>
        <NavegationCart />
        <CartMainContent />
      </Main> 
      <Footer />
    </FullScreenContainer>
  )
}

export default Cart