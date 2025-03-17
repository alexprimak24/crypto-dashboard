import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  return (
    <div className="flex items-center justify-between">
      <Link to="/">CryptoDashboardLogo</Link>{' '}
      <Link to="/login" state={{ background: location }}>
        Login
      </Link>
    </div>
  );
}
