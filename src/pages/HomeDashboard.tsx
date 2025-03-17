import { useState } from 'react';
import MarketSummary from '../components/MarketSummary';
import CoinsList from '../components/CoinsList';
import { useTopCryptoList } from '../hooks/useTopCryptoList';

const COINS_TO_SHOW = 10;

function HomeDashboard() {
  const [page, setPage] = useState(1);
  const topCryptoData = useTopCryptoList(
    import.meta.env.VITE_COINGECO_API,
    page,
    COINS_TO_SHOW,
  );

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-5">
      <MarketSummary />
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
