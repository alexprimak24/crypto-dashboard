import React from 'react';
import Logo from './ui/Logo';
import CoingecoFooter from './ui/CoingecoFooter';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <>
      <Logo />
      <main>
        <Outlet />
      </main>
      <CoingecoFooter />
    </>
  );
}
