import { CoinInfo, CryptoList, CryptoSummary } from './types';

const API_URL = 'https://api.coingecko.com/api/v3';

export async function fetchCryptoSummary(
  apiKey: string,
): Promise<CryptoSummary> {
  const res = await fetch(`${API_URL}/global`, {
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': apiKey,
    },
  });
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
    `${API_URL}/coins/markets?vs_currency=usd&per_page=${itemsPerPage}&page=${page}`,
    {
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': apiKey,
      },
    },
  );
  if (!res.ok) {
    throw new Error('Something went wrong with fetching currencies');
  }
  const data = await res.json();
  return data;
}

export async function fetchCoinInfo(
  apiKey: string,
  id: string,
): Promise<CoinInfo> {
  const res = await fetch(`${API_URL}/coins/${id}`, {
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': apiKey,
    },
  });
  if (!res.ok) {
    throw new Error('Something went wrong with fetching currencies');
  }
  const data = await res.json();
  return data;
}

export async function searchCoin(query: string, apiKey: string) {
  const res = await fetch(`${API_URL}/search?query=${query}`, {
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': apiKey,
    },
  });
  if (!res.ok) {
    throw new Error('Something went wrong with fetching currencies');
  }
  const data = await res.json();
  return data;
}
