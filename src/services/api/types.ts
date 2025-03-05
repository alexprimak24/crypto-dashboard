export interface CryptoSummary {
  active_cryptocurrencies: number;
  market_cap_percentage: { btc: number; eth: number; sol: number };
  market_cap_change_percentage_24h_usd: number;
  total_market_cap: { btcC: number; ethC: number; bnbC: number };
}

export interface CryptoList {
  market_cap_rank: number;
  name: string;
  symbol: string;
  image: string;
  ath: number;
  current_price: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  max_supply: number;
  circulating_supply: number;
}
