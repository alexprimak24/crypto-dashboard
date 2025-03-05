import React, { memo } from 'react';
import { useCryptoSummary } from '../hooks/useCryptoSummary';
import Spinner from './ui/Spinner';
import Message from './ui/Message';

const MarketSummary = memo(function MarketSummary() {
  const { cryptoSummary, isLoading, error } = useCryptoSummary(
    import.meta.env.VITE_COINGECO_KEY,
  );

  if (isLoading) return <Spinner />;
  if (error) return <Message message={error} />;

  if (!cryptoSummary) return null;
  const {
    market_cap_percentage,
    active_cryptocurrencies,
    market_cap_change_percentage_24h_usd,
    total_market_cap,
  } = cryptoSummary;
  console.log(cryptoSummary);
  return (
    <div className="flex justify-between">
      {cryptoSummary && !isLoading && (
        <>
          <div className="w-64">
            Active cryptocurrencies{' '}
            <span className="text-sky-400">{active_cryptocurrencies}</span>
          </div>
          <div className="">
            <h2>Market Dominance of Top Currencies:</h2>
            <ul>
              {Object.entries(market_cap_percentage).map(([key, value]) => (
                <li key={key}>
                  {key.toUpperCase()}: With Market Cap{' '}
                  <span className="text-sky-400">{value.toFixed(2)}</span>%
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2>Total Cap of Top Currencies: </h2>
            <p>"data may be not accurate"</p>
            <ul>
              {Object.entries(total_market_cap).map(([key, value]) => (
                <li key={key}>
                  {key.slice(0, -1).toUpperCase()}: With Market Cap{' '}
                  <span className="text-sky-400">{Math.round(value)}</span>$
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2>Total market cap change 24hr </h2>
            <div>
              <span className="text-sky-400">
                {market_cap_change_percentage_24h_usd.toFixed(2)}
              </span>
              %
            </div>
          </div>
        </>
      )}
    </div>
  );
});

export default MarketSummary;
