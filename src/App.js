import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';

import { GlobalStyle } from './components/styles/GlobalStyles';
import { Logo } from './components/Logo';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail')

  console.log(detailId);

  return(
    <>
    <GlobalStyle />
    <Logo />
    {
      detailId
      ?
        <PhotoCardWithQuery id={detailId} />
      :
      <>
        <ListOfCategories />
        <ListOfPhotoCards categoryId={1} />
      </>
    }    
  </>
  )
};
