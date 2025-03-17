import { useEffect, useState } from 'react';
import { CoinSearchResult } from '../services/api/types';
import { searchCoin } from '../services/api';
import { useDebounce } from './useDebounce';

export function useSearchCoins(query: string, apiKey: string) {
  //to prevent a lot of unnecessary api calls
  const debouncedQuery = useDebounce(query, 200);
  const [coins, setCoins] = useState<CoinSearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
    } else {
      //if query is empty clear result
      setCoins([]);
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    //this one is needed for the case if we change our input and data didn't yet arrived from previous fetch, so we abort old request and start a new one
    const controller = new AbortController();

    async function fetchCoins() {
      setIsLoading(true);
      setError('');
      try {
        setTimeout(() => {});
        const data = await searchCoin(debouncedQuery, apiKey);
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
  }, [debouncedQuery, apiKey]);

  return { coins, isLoading, error };
}
