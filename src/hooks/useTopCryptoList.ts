import { useEffect, useState } from 'react';
import { fetchTopCryptoList } from '../services/api';
import { CryptoList } from '../services/api/types';

export function useTopCryptoList(
  apiKey: string,
  page: number,
  itemsPerPage: number,
) {
  const [topCryptoList, setTopCryptoList] = useState<CryptoList[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadCryptoSummary() {
      setIsLoading(true);
      setError('');
      try {
        const data = await fetchTopCryptoList(apiKey, page, itemsPerPage);
        setTopCryptoList(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occured');
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadCryptoSummary();
  }, [apiKey, page]);

  return { topCryptoList, isLoading, error };
}
