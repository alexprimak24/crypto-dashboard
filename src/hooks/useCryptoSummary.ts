import { useEffect, useState } from 'react';
import { fetchCryptoSummary } from '../services/coingeco';
import { CryptoSummary } from '../services/coingeco/types';

export function useCryptoSummary(apiKey: string) {
  const [cryptoSummary, setCryptoSummary] = useState<CryptoSummary | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadCryptoSummary() {
      setIsLoading(true);
      setError('');
      try {
        const data = await fetchCryptoSummary(apiKey);
        setCryptoSummary(data);
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
  }, [apiKey]);

  return { cryptoSummary, isLoading, error };
}
