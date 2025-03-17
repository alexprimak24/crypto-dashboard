import React, { useState } from 'react';
import Loader from './ui/Loader';
import ErrorMessage from './ui/ErrorMessage';
import SearchField from './SearchField';
import { useSearchCoins } from '../hooks/useSearchCoins';
import SearchedCoin from './SearchedCoin';
import Message from './ui/Message';

interface SearchForCoinModalProps {
  setIsSearchModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SearchForCoinModal({
  setIsSearchModalOpen,
}: SearchForCoinModalProps) {
  const [query, setQuery] = useState('');
  const { coins, isLoading, error } = useSearchCoins(
    query,
    import.meta.env.VITE_COINGECO_KEY,
  );
  const [showFullResult, setShowFullResult] = useState(false);

  const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={() => setIsSearchModalOpen(false)}
      className="bg-opacity-50 fixed inset-0 z-10 flex items-center justify-center bg-[#181818]/20 backdrop-blur-sm"
    >
      <div
        onClick={handleModalContentClick}
        className="absolute top-[10%] left-1/2 z-50 h-[50%] w-[50%] -translate-x-1/2 transform rounded-3xl bg-[#181818] p-6 text-white shadow-lg"
      >
        <div className="flex flex-col justify-between">
          <h1 className="mb-4 text-xl font-bold">Search Coins</h1>
          <div className="mb-4">
            <SearchField query={query} setQuery={setQuery} />
          </div>
          {isLoading && <Loader />}

          {error !== '' && <ErrorMessage message={error} />}

          {coins.length === 0 && (
            <Message message="Start typing to find the coin" />
          )}

          <ul className="mt-4 max-h-[400px] divide-y divide-gray-700 overflow-y-scroll">
            {!showFullResult &&
              coins.slice(0, 3).map((coin) => <SearchedCoin coinInfo={coin} />)}
            {showFullResult &&
              coins.map((coin) => <SearchedCoin coinInfo={coin} />)}
          </ul>
          {!showFullResult && query && (
            <button
              onClick={() => setShowFullResult(true)}
              className="mt-4 w-full cursor-pointer rounded bg-sky-600 py-2 font-bold text-white transition duration-200 ease-in-out hover:bg-sky-700"
            >
              Show all {coins.length} results
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
