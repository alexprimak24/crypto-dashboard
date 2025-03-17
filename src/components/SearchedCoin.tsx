import React from 'react';
import { CoinSearchResult } from '../services/api/types';
import { useNavigate } from 'react-router-dom';

interface SearchedCoinProps {
  coinInfo: CoinSearchResult;
}
export default function SearchedCoin({ coinInfo }: SearchedCoinProps) {
  const { market_cap_rank, id, symbol, name, thumb } = coinInfo;
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/coin/${id}`);
  }

  return (
    <li
      key={id}
      onClick={handleClick}
      className="grid grid-cols-[3rem_1fr_1fr_1fr] items-center px-2 py-3 transition-colors hover:bg-gray-800"
    >
      <span className="text-gray-400">{market_cap_rank}</span>
      <img className="h-6 w-6 rounded-full" src={thumb} alt={name} />
      <h2 className="font-semibold uppercase">{symbol}</h2>
      <p className="text-gray-300">{name}</p>
    </li>
  );
}
