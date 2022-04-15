import { NextPage } from 'next';

import { FullScreenContainer } from '../components/DesignSystemElements/FullScreenContainer';
import { Header } from '../components/DesignSystemElements/Header';
import { NavegationCart } from '../components/NavegationCart';
import { Main } from '../components/DesignSystemElements/Main';
import { ServiceTermsMainContent } from '../components/ServiceTermsMainContent'
import { Footer } from '../components/DesignSystemElements/Footer';

const ServiceTerms: NextPage = () => {
  return(
    <FullScreenContainer> 
      <Header />
      <Main>
        <NavegationCart />
        <ServiceTermsMainContent />
      </Main> 
      <Footer />
    </FullScreenContainer>
  )
}

export default ServiceTerms