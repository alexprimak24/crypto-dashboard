import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  return (
    <>
      <Link to="/">CryptoDashboardLogo</Link>{' '}
      <Link to="/login" state={{ background: location }}>
        Login
      </Link>
    </>
  );
}
