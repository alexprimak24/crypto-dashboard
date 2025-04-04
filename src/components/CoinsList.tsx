import React from 'react';
import CoinItem from './CoinItem';
import Loader from './ui/Loader';
import Message from './ui/Message';
import { CryptoList } from '../services/coingeco/types';

interface CoinListProps {
  topCryptoList: CryptoList[] | null;
  isLoading: boolean;
  error: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}
// CHECK OUT ABOUT AMOUNT OF RERENDERS once I finish with that component
export default function CoinsList({
  topCryptoList,
  isLoading,
  error,
  setPage,
  page,
}: CoinListProps) {
  return (
    <div className="min-h-screen px-4 pt-2 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="mt-2 grid w-full grid-cols-9 items-center gap-4 rounded-lg bg-[#242424] p-4 text-right shadow transition-shadow hover:shadow-md">
          <h4 className="col-span-1 text-center font-semibold text-gray-300">
            Rank
          </h4>
          <h4 className="col-span-2 flex items-center gap-2">Name</h4>
          <h4 className="col-span-1 font-semibold text-gray-100">Price</h4>
          <h4 className="col-span-1 text-sm text-gray-400">ATH</h4>
          <h4 className="col-span-2 text-right">24h %</h4>
          <h4 className="col-span-2 text-center">Supply</h4>
        </div>
        {isLoading && <Loader />}
        {error && (
          <Message message="Something went wrong while fetching topCryptoList" />
        )}
        <ul>
          {!isLoading &&
            topCryptoList &&
            topCryptoList.map((topCryptoCoin) => (
              <CoinItem coinInfo={topCryptoCoin} key={topCryptoCoin.id} />
            ))}
        </ul>
        <div className="mt-4 flex justify-end gap-3">
          <button
            disabled={page === 1}
            onClick={() => setPage((page) => Math.max(page - 1, 1))}
            className="cursor-pointer rounded bg-gray-700 px-4 py-2 font-bold text-gray-200 hover:bg-gray-600 disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={() => setPage((page) => page + 1)}
            className="cursor-pointer rounded bg-gray-700 px-4 py-2 font-bold text-gray-200 hover:bg-gray-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
