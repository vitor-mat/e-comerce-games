import { NextPage } from 'next';

import { FullScreenContainer } from '../components/DesignSystemElements/FullScreenContainer';
import { Header } from '../components/DesignSystemElements/Header';
import { NavegationCart } from '../components/NavegationCart';
import { Main } from '../components/DesignSystemElements/Main';
import { PrivacyPolicyMainContent } from '../components/PrivacyPolicyMainContent'
import { Footer } from '../components/DesignSystemElements/Footer';

const PrivacyPolicy: NextPage = () => {
  return(
    <FullScreenContainer> 
      <Header />
      <Main>
        <NavegationCart />
        <PrivacyPolicyMainContent />
      </Main> 
      <Footer />
    </FullScreenContainer>
  )
}

export default PrivacyPolicy