import React, { useState } from 'react';
import MarketSummary from '../components/MarketSummary';
import CoinsList from '../components/CoinsList';
import { useTopCryptoList } from '../hooks/useTopCryptoList';
import SearchForCoinModal from '../components/SearchForCoinModal';

const COINS_TO_SHOW = 10;

function HomeDashboard() {
  const [page, setPage] = useState(1);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const topCryptoData = useTopCryptoList(
    import.meta.env.VITE_COINGECO_KEY,
    page,
    COINS_TO_SHOW,
  );

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-5">
      <MarketSummary />
      <button onClick={() => setIsSearchModalOpen(true)}>Search</button>
      {isSearchModalOpen && (
        <SearchForCoinModal setIsSearchModalOpen={setIsSearchModalOpen} />
      )}
      <CoinsList
        topCryptoList={topCryptoData.topCryptoList ?? []}
        isLoading={topCryptoData.isLoading}
        error={topCryptoData.error}
        setPage={setPage}
        page={page}
      />
    </div>
  );
}

export default HomeDashboard;
