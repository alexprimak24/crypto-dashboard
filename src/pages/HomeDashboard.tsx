/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Spinner from '../components/ui/Spinner';
import Message from '../components/ui/Message';
//AND REMOVE ESLINT DISABLE ABOVE
// TOMORROW
// https://docs.coingecko.com/v3.0.1/reference/endpoint-overview

const options = { method: 'GET', headers: { accept: 'application/json' } };

interface cryptoSummaryObj {
  active_cryptocurrencies: number;
  market_cap_percentage: { btc: number; eth: number; sol: number };
}
export default function HomeDashboard() {
  const [cryptoSummary, setCryptoSummary] = useState<
    cryptoSummaryObj | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError('');
        const res = await fetch(
          `https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=${import.meta.env.VITE_COINGECO_KEY}`,
          options,
        );

        if (!res.ok)
          throw new Error('Something went wrong with fetching currencies');

        const data = await res.json();

        // Pick only currencies neede

        const { btc, eth, sol } = data.data.market_cap_percentage;

        setCryptoSummary({
          active_cryptocurrencies: data.data.active_cryptocurrencies,
          market_cap_percentage: { btc, eth, sol },
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError')
          setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error && !isLoading) {
    return <Message message={error} />;
  }

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
