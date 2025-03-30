import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchForCoinModal from './SearchForCoinModal';
import { useUser } from '../hooks/useUser';
import { useLogout } from '../hooks/useLogout';

export default function Header() {
  const { currentUser } = useUser();
  const { logout } = useLogout();

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
        {!currentUser && (
          <Link to="/login" state={{ background: location }}>
            Login
          </Link>
        )}
        {currentUser && (
          <div className="flex gap-2">
            <p className="rounded-3xl border border-blue-400 px-4 py-2">
              Welcome{' '}
              <span className="text-blue-400">
                {currentUser.user.user_metadata.name}
              </span>
            </p>
            <button
              className="cursor-pointer rounded-3xl bg-blue-400 px-4 py-2 text-black transition-colors duration-300 hover:bg-blue-600"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
