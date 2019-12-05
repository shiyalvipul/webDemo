import React from 'react';

import './assets/styles/app.sass';
import HomePageContainer from './modules/home-page/components/HomePageContainer';
import AppHeaderContainer from './shared/AppHeader/AppHeaderContainer';
import ContactUsContainer from './modules/contact-us/ContactUsContainer';
import AppFooterContainer from './shared/AppFooter/AppFooterContainer';

const App = () => {
  return (
    <div className='main-template'>
      <HomePageContainer />
      <AppHeaderContainer/>
      <ContactUsContainer/>
      <AppFooterContainer/>
    </div>
  );
}

export default App;
