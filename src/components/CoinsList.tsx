/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useTopCryptoList } from '../hooks/useTopCryptoList';

const COINS_TO_SHOW = 10;

export default function CoinsList() {
  const [page, setPage] = useState(1);
  const { topCryptoList, isLoading, error } = useTopCryptoList(
    import.meta.env.VITE_COINGECO_KEY,
    page,
    COINS_TO_SHOW,
  );

  console.log(topCryptoList);

  return (
    <div className="flex">
      <button onClick={() => setPage((page) => page - 1)}>Back</button>
      <button onClick={() => setPage((page) => page + 1)}>Next</button>
    </div>
  );
}
