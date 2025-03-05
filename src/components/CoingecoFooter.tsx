// import React from 'react';
import PriceDataPoweredBy from '../assets/CGLogoAttibution.png';
export default function CoingecoFooter() {
  return (
    <div className="flex flex-row justify-between text-xl">
      <p className="h-[72px] text-center leading-[72px]">
        Powered by{' '}
        <a
          href="https://www.coingecko.com/en/api/"
          target="_blank"
          rel="noreferrer"
          className="text-sky-600"
        >
          CoinGecko API
        </a>
      </p>
      <a
        href="https://www.coingecko.com/en/api"
        target="_blank"
        rel="noreferrer"
      >
        <img src={PriceDataPoweredBy} alt="CoinGecko Price Data Powered By" />
      </a>
    </div>
  );
}
