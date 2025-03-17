import { useEffect, useState } from 'react';
import { CoinSearchResult } from '../services/api/types';
import { searchCoin } from '../services/api';

export function useSearchCoins(query: string, apiKey: string) {
  const [coins, setCoins] = useState<CoinSearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    //this one is needed for the case if we change our input and data didn't yet arrived from previous fetch, so we abort old request and start a new one
    const controller = new AbortController();

    async function fetchCoins() {
      setIsLoading(true);
      setError('');
      try {
        const data = await searchCoin(query, apiKey);
        setCoins(data.coins);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unexpected error occured');
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchCoins();
    //on every new keystroke our contorller will abort existing fetch req
    return function () {
      controller.abort();
    };
  }, [query, apiKey]);

  return { coins, isLoading, error };
}
