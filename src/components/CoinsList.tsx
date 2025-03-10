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
    <div className="flex w-full flex-col gap-4">
      <div className="">
        {isLoading && <Spinner />}
        {error && (
          <Message message="Something went wrong while fetching topCryptoList" />
        )}
        {!isLoading &&
          topCryptoList &&
          topCryptoList.map((topCryptoCoin) => (
            <CoinItem coinInfo={topCryptoCoin} key={topCryptoCoin.id} />
          ))}
        <div className="flex gap-2 self-start">
          <button onClick={() => setPage((page) => page - 1)}>Back</button>
          <button onClick={() => setPage((page) => page + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
}
