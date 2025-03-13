import React from 'react';
import Header from './Header';
import CoingecoFooter from './ui/CoingecoFooter';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <CoingecoFooter />
    </>
  );
}
