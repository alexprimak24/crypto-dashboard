import React, { useMemo, useState } from 'react';
import MarketSummary from '../components/MarketSummary';
import SearchForCoin from '../components/SearchForCoin';
import CoinsList from '../components/CoinsList';
import { useTopCryptoList } from '../hooks/useTopCryptoList';
import { searchCoin } from '../services/api';

const COINS_TO_SHOW = 10;

function HomeDashboard() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const topCryptoData = useTopCryptoList(
    import.meta.env.VITE_COINGECO_KEY,
    page,
    COINS_TO_SHOW,
  );

  const filteredTopCryptoList = useMemo(() => {
    if (!topCryptoData.topCryptoList) return [];
    return topCryptoData.topCryptoList.filter((topCrypto) =>
      topCrypto.name.toLowerCase().includes(query.toLowerCase()),
    );
  }, [topCryptoData.topCryptoList, query]);

  async function searchForCoin() {
    const order = await searchCoin(import.meta.env.VITE_COINGECO_KEY, 'btc');
    console.log(order);
  }

  searchForCoin();
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-5">
      <MarketSummary />
      <SearchForCoin query={query} setQuery={setQuery} />
      <CoinsList
        topCryptoList={filteredTopCryptoList}
        isLoading={topCryptoData.isLoading}
        error={topCryptoData.error}
        setPage={setPage}
        page={page}
      />
    </div>
  );
}

export default HomeDashboard;
