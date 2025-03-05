export interface CryptoSummary {
  active_cryptocurrencies: number;
  market_cap_percentage: { btc: number; eth: number; sol: number };
}

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
  return {
    active_cryptocurrencies: data.data.active_cryptocurrencies,
    market_cap_percentage: { btc, eth, sol },
  };
}
