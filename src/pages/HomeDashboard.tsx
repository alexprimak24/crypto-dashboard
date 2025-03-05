import { useEffect } from 'react';
//AND REMOVE ESLINT DISABLE ABOVE
// TOMORROW
// https://docs.coingecko.com/v3.0.1/reference/endpoint-overview

export default function HomeDashboard() {
  // const [cryptoSummary, setCryptoSummary] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState('');
  useEffect(() => {
    async function fetchMovies() {
      try {
        // setIsLoading(true);
        // setError('');
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/token_price/bitcoin?x_cg_demo_api_key=${import.meta.env.VITE_COINGECO_KEY}`,
        );

        if (!res.ok)
          throw new Error('Something went wrong with fetching movies');

        const data = await res.json();
        console.log(data);

        if (data.Response === 'False') throw new Error('Movie not found');

        // setCryptoSummary(data.Search);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') console.log('hello');
        // setError((err as Error).message);
      } finally {
        console.log('hello');
        // setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);
  return <div>HomeDashboard</div>;
}
