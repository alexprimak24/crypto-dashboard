import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchForCoinModal from './SearchForCoinModal';

export default function Header() {
  const location = useLocation();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <Link to="/">CryptoDashboardLogo</Link>{' '}
      <div className="flex items-center gap-20">
        <button
          className="inline-flex cursor-pointer items-center rounded-4xl px-8 py-2 font-bold text-white shadow transition-colors duration-200 ease-in-out hover:bg-blue-800/40 focus:ring-0 focus:outline-none"
          onClick={() => setIsSearchModalOpen(true)}
        >
          Search <span className="ml-3">🔍</span>
        </button>
        {isSearchModalOpen && (
          <SearchForCoinModal setIsSearchModalOpen={setIsSearchModalOpen} />
        )}
        <Link to="/login" state={{ background: location }}>
          Login
        </Link>
      </div>
    </div>
  );
}
