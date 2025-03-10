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

  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between rounded-lg bg-[#242424] p-4 shadow transition-shadow hover:shadow-md">
          <h2 className="mb-2 text-xl font-semibold text-gray-100">
            Active Cryptocurrencies
          </h2>
          <p className="text-3xl font-bold text-sky-400">
            {active_cryptocurrencies.toLocaleString()}
          </p>
        </div>
        <div className="flex flex-col justify-between rounded-lg bg-[#242424] p-4 shadow transition-shadow hover:shadow-md">
          <h2 className="mb-2 text-xl font-semibold text-gray-100">
            Market Dominance
          </h2>
          <ul className="space-y-1 text-gray-300">
            {Object.entries(market_cap_percentage).map(([key, value]) => (
              <li key={key} className="flex justify-between">
                <span className="font-medium">{key.toUpperCase()}:</span>
                <span className="ml-2 text-sky-400">{value.toFixed(2)}%</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between rounded-lg bg-[#242424] p-4 shadow transition-shadow hover:shadow-md">
          <h2 className="mb-2 text-xl font-semibold text-gray-100">
            Total Cap of Top Currencies
          </h2>
          <p className="mb-2 text-sm text-gray-400">
            ("data may not be accurate")
          </p>
          <ul className="space-y-1 text-gray-300">
            {Object.entries(total_market_cap).map(([key, value]) => (
              <li key={key} className="flex justify-between">
                <span className="font-medium">
                  {key.slice(0, -1).toUpperCase()}:
                </span>
                <span className="ml-2 text-sky-400">
                  {Math.round(value).toLocaleString()}$
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between rounded-lg bg-[#242424] p-4 shadow transition-shadow hover:shadow-md">
          <h2 className="mb-2 text-xl font-semibold text-gray-100">
            Total Market Cap Change (24h)
          </h2>
          <div className="text-3xl font-bold text-sky-400">
            {market_cap_change_percentage_24h_usd.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
});

export default MarketSummary;
