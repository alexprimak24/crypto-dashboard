import { CryptoList, CryptoSummary } from './types';

// for every fetch
const options = { method: 'GET', headers: { accept: 'application/json' } };

export async function fetchCryptoSummary(
  apiKey: string,
): Promise<CryptoSummary> {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=${apiKey}`,
    options,
  );
  if (!res.ok) {
    throw new Error('Something went wrong with fetching currencies');
  }
  const data = await res.json();
  const { btc, eth, sol } = data.data.market_cap_percentage;
  const { btc: btcC, eth: ethC, bnb: bnbC } = data.data.total_market_cap;

  return {
    active_cryptocurrencies: data.data.active_cryptocurrencies,
    market_cap_percentage: { btc, eth, sol },
    market_cap_change_percentage_24h_usd:
      data.data.market_cap_change_percentage_24h_usd,
    total_market_cap: { btcC, ethC, bnbC },
  };
}

export async function fetchTopCryptoList(
  apiKey: string,
  page: number,
  itemsPerPage: number,
): Promise<CryptoList[]> {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=${itemsPerPage}&page=${page}&x_cg_demo_api_key=${apiKey}`,
    options,
  );
  if (!res.ok) {
    throw new Error('Something went wrong with fetching currencies');
  }
  const data = await res.json();
  return data;
}
