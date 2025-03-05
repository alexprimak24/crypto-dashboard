import React, { useState } from 'react';
import MarketSummary from '../components/MarketSummary';
import SearchForCoin from '../components/SearchForCoin';

function HomeDashboard() {
  const [query, setQuery] = useState('');
  return (
    <div className="flex flex-col gap-5">
      <MarketSummary />
      <SearchForCoin query={query} setQuery={setQuery} />
    </div>
  );
}

export default HomeDashboard;
