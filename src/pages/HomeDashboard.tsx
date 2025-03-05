/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

export default function HomeDashboard() {
  const [cryptoSummary, setCryptoSummary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError('');
        const res = await fetch(
          `https://api.coingecko.com/api/v3/ping?x_cg_demo_api_key=${import.meta.env.VITE_COINGECO_KEY}`,
        );

        if (!res.ok)
          throw new Error('Something went wrong with fetching movies');

        const data = await res.json();
        console.log(data);

        if (data.Response === 'False') throw new Error('Movie not found');

        setCryptoSummary(data.Search);
      } catch (err) {
        if ((err as Error).name !== 'AbortError')
          setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);
  return <div>HomeDashboard</div>;
}
