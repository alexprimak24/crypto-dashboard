import React from 'react';
import Header from './Header';
import CoingecoFooter from './ui/CoingecoFooter';
import { Outlet, useNavigation } from 'react-router-dom';
import LoaderFullScreen from './ui/LoaderFullScreen';

export default function AppLayout() {
  //this one allows to grab loading state for any page that is loading, so that we can display loader when the page is loading
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';
  return (
    <>
      <Header />
      {isLoading && <LoaderFullScreen />}
      <div>
        <main>
          <Outlet />
        </main>
      </div>
      <CoingecoFooter />
    </>
  );
}
