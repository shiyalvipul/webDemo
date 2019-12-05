import React, { useState,useEffect } from 'react';
import AppHeader from './AppHeader';

const AppHeaderContainer = () => {
  const [active, setActive] =  useState(false); 

  const scrolling = () => {
    if(window.pageYOffset > 1 ) {
      setActive(true);
    }
    else {
      setActive(false);
    }
  }
 
  useEffect(() => {
      window.addEventListener('scroll', scrolling);
    // return () => {
    //   window.removeEventListener('scroll', scrolling);
    // };
  }, []);

  return (
    <AppHeader
      active={active}
    />
  )
}
export default AppHeaderContainer;