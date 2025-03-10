import React, { useState } from 'react';
import { useTopCryptoList } from '../hooks/useTopCryptoList';
import CoinItem from './CoinItem';
import Spinner from './ui/Spinner';
import Message from './ui/Message';

const COINS_TO_SHOW = 10;
// CHECK OUT ABOUT AMOUNT OF RERENDERS once I finish with that component
export default function CoinsList() {
  const [page, setPage] = useState(1);
  const { topCryptoList, isLoading, error } = useTopCryptoList(
    import.meta.env.VITE_COINGECO_KEY,
    page,
    COINS_TO_SHOW,
  );

  return (
    <div className="min-h-screen px-4 pt-2 pb-8">
      <div className="mx-auto max-w-7xl">
        {isLoading && <Spinner />}
        {error && (
          <Message message="Something went wrong while fetching topCryptoList" />
        )}
        {!isLoading &&
          topCryptoList &&
          topCryptoList.map((topCryptoCoin) => (
            <CoinItem coinInfo={topCryptoCoin} key={topCryptoCoin.id} />
          ))}
        <div className="mt-4 flex justify-end gap-3">
          <button
            onClick={() => setPage((page) => Math.max(page - 1, 1))}
            className="rounded bg-gray-700 px-4 py-2 font-bold text-gray-200 hover:bg-gray-600"
          >
            Back
          </button>
          <button
            onClick={() => setPage((page) => page + 1)}
            className="rounded bg-gray-700 px-4 py-2 font-bold text-gray-200 hover:bg-gray-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
