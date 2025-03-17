import React from 'react';
import { CoinSearchResult } from '../services/api/types';

interface SearchedCoinProps {
  coinInfo: CoinSearchResult;
}
export default function SearchedCoin({ coinInfo }: SearchedCoinProps) {
  return (
    <li
      key={coinInfo.id}
      className="grid grid-cols-[3rem_1fr_1fr_1fr] items-center px-2 py-3 transition-colors hover:bg-gray-800"
    >
      <span className="text-gray-400">{coinInfo.market_cap_rank}</span>
      <img
        className="h-6 w-6 rounded-full"
        src={coinInfo.thumb}
        alt={coinInfo.name}
      />
      <h2 className="font-semibold uppercase">{coinInfo.symbol}</h2>
      <p className="text-gray-300">{coinInfo.name}</p>
    </li>
  );
}
