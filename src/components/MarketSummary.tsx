import React from 'react';
import { useCryptoSummary } from '../hooks/useCryptoSummary';
import Spinner from './ui/Spinner';
import Message from './ui/Message';

function MarketSummary() {
  const { cryptoSummary, isLoading, error } = useCryptoSummary(
    import.meta.env.VITE_COINGECO_KEY,
  );
  if (isLoading) return <Spinner />;
  if (error) return <Message message={error} />;
  return (
    <div>
      {cryptoSummary && !isLoading && (
        <>
          <div className="w-64">
            Active cryptocurrencies{' '}
            <span className="text-sky-400">
              {cryptoSummary?.active_cryptocurrencies}
            </span>
          </div>
          <ul>
            {cryptoSummary?.market_cap_percentage &&
              Object.entries(cryptoSummary.market_cap_percentage).map(
                ([key, value]) => (
                  <li key={key}>
                    {key}: equals{' '}
                    <span className="text-sky-400">{value.toFixed(2)}%</span>
                  </li>
                ),
              )}
          </ul>
        </>
      )}
    </div>
  );
}

export default MarketSummary;
