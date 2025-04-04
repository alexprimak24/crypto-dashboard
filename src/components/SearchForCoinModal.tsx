import React, { useState } from 'react';
import Loader from './ui/Loader';
import ErrorMessage from './ui/ErrorMessage';
import SearchField from './SearchField';
import { useSearchCoins } from '../hooks/useSearchCoins';
import SearchedCoin from './SearchedCoin';

interface SearchForCoinModalProps {
  setIsSearchModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
};

export default function SearchForCoinModal({
  setIsSearchModalOpen,
}: SearchForCoinModalProps) {
  const [query, setQuery] = useState('');
  const { coins, isLoading, error } = useSearchCoins(
    query,
    import.meta.env.VITE_COINGECO_API,
  );
  const [showFullResult, setShowFullResult] = useState(false);

  return (
    <div
      onClick={() => setIsSearchModalOpen(false)}
      role="dialog"
      className="bg-opacity-50 fixed inset-0 z-10 flex items-center justify-center bg-[#181818]/20 backdrop-blur-sm"
    >
      <div
        onClick={handleModalContentClick}
        className="absolute top-[10%] left-1/2 h-[50%] w-[50%] -translate-x-1/2 transform rounded-3xl bg-[#181818] p-6 text-white shadow-lg"
      >
        <div className="flex flex-col justify-between">
          <h1 className="mb-4 text-xl font-bold">Search Coins</h1>
          <div className="mb-4">
            <SearchField query={query} setQuery={setQuery} />
          </div>
          {isLoading && <Loader />}

          {error && <ErrorMessage message={error} />}

          {coins.length === 0 && !isLoading && (
            <h2 className="mt-5 flex items-center justify-center text-xl">
              🧑‍💻 Start typing to find the coin...
            </h2>
          )}

          <ul className="mt-4 max-h-[400px] divide-y divide-gray-700 overflow-y-scroll">
            {!showFullResult &&
              coins
                .slice(0, 3)
                .map((coin) => (
                  <SearchedCoin
                    coinInfo={coin}
                    key={coin.id}
                    closeModal={() => setIsSearchModalOpen(false)}
                  />
                ))}
            {showFullResult &&
              coins.map((coin) => (
                <SearchedCoin
                  coinInfo={coin}
                  key={coin.id}
                  closeModal={() => setIsSearchModalOpen(false)}
                />
              ))}
          </ul>
          {!showFullResult && query && (
            <button
              onClick={() => setShowFullResult(true)}
              className="mt-4 w-full cursor-pointer rounded bg-sky-600 py-2 font-bold text-white transition duration-200 ease-in-out hover:bg-sky-700"
            >
              Show all {coins.length} results
            </button>
          )}
          {showFullResult && (
            <button
              onClick={() => setShowFullResult(false)}
              className="mt-4 w-full cursor-pointer rounded bg-cyan-600 py-2 font-bold text-white transition duration-200 ease-in-out hover:bg-cyan-700"
            >
              Hide full results
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
