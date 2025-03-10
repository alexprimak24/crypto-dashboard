import React, { memo } from 'react';
import { CryptoList } from '../services/api/types';
import { clsx } from 'clsx';
const CoinItem = memo(function CoinItem({
  coinInfo,
}: {
  coinInfo: CryptoList;
}) {
  const {
    id,
    market_cap_rank,
    name,
    symbol,
    image,
    ath,
    current_price,
    price_change_24h,
    price_change_percentage_24h,
    max_supply,
    circulating_supply,
  } = coinInfo;
  return (
    <div className="mt-2 grid grid-cols-9 gap-4">
      <div className="col-span-1">{market_cap_rank}</div>
      <div className="col-span-2 flex gap-2">
        <img src={image} alt="CoinLogo" className="size-5" />
        <p>{name} </p> <span>{symbol}</span>
      </div>
      <div className="col-span-1">${current_price}</div>
      <div className="col-span-1">${ath}</div>
      <div
        className={clsx(
          price_change_24h < 0 ? 'text-red-400' : 'text-green-500',
          'col-span-2',
        )}
      >
        {price_change_24h > 0.01 || price_change_24h < -0.01
          ? price_change_24h.toFixed(2)
          : price_change_24h}
        $ (<span>{price_change_percentage_24h.toFixed(2)}%</span>)
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <label htmlFor={id}>{circulating_supply.toFixed() + symbol}</label>
        <progress
          id={id}
          className="bg-[#00ff00]"
          max={max_supply}
          value={circulating_supply}
        ></progress>
      </div>
    </div>
  );
});

export default CoinItem;
