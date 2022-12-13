import React, { Fragment } from 'react';
import './App.scss';
import CartList from './components/gallery/CartList';
import PhotoList from './components/gallery/PhotoList';
import HeaderMain from './components/HeaderMain';
import { AuthProvider } from './contexts/auth-context';
import { useCount } from './contexts/countContext';
import { GalleryProvider } from './contexts/gallery-context copy';

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
