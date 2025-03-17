import { memo } from 'react';
import { CryptoList } from '../services/api/types';
import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';
const CoinItem = memo(function CoinItem({
  coinInfo,
}: {
  coinInfo: CryptoList;
}) {
  const navigate = useNavigate();
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

  function handleClick() {
    navigate(`/coin/${id}`);
  }

  return (
    <li
      onClick={handleClick}
      className="mt-2 grid w-full cursor-pointer grid-cols-9 items-center gap-4 rounded-lg bg-[#242424] p-4 duration-300 ease-in hover:bg-[#383838]"
    >
      <div className="col-span-1 text-center font-semibold text-gray-300">
        {market_cap_rank}
      </div>
      <div className="col-span-2 flex items-center gap-2">
        <img
          src={image}
          alt={`${name} logo`}
          className="h-8 w-8 object-contain"
        />
        <div>
          <p className="font-medium text-gray-100">{name}</p>
          <span className="text-sm text-gray-400 uppercase">{symbol}</span>
        </div>
      </div>
      <div className="col-span-1 text-right font-semibold text-gray-100">
        ${current_price.toLocaleString()}
      </div>
      <div className="col-span-1 text-right text-sm text-gray-400">
        ${ath.toLocaleString()}
      </div>
      <div
        className={clsx(
          'col-span-2 text-right font-medium',
          price_change_24h < 0 ? 'text-red-500' : 'text-green-500',
        )}
      >
        {Math.abs(price_change_24h) > 0.01
          ? price_change_24h.toFixed(2)
          : price_change_24h}
        $ (<span>{price_change_percentage_24h.toFixed(2)}%</span>)
      </div>
      <div className="col-span-2 flex flex-col justify-center">
        <label htmlFor={id} className="mb-1 text-sm text-gray-300">
          {circulating_supply.toLocaleString()} {symbol}
        </label>
        <progress
          id={id}
          className="h-2 w-full overflow-hidden rounded-full"
          max={max_supply}
          value={circulating_supply}
        ></progress>
      </div>
    </li>
  );
});

export default CoinItem;
