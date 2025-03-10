import React from 'react';
import PriceDataPoweredBy from '../../assets/CGLogoAttibution.png';
export default function CoingecoFooter() {
  return (
    <footer className="mx-8 my-8 flex flex-row items-center justify-between text-xl text-gray-300">
      <p className="leading-[72px]">
        Powered by{' '}
        <a
          href="https://www.coingecko.com/en/api/"
          target="_blank"
          rel="noreferrer"
          className="text-sky-400 transition-colors hover:text-sky-300"
        >
          CoinGecko API
        </a>
      </p>
      <a
        href="https://www.coingecko.com/en/api"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={PriceDataPoweredBy}
          alt="CoinGecko Price Data Powered By"
          className="h-16 object-contain"
        />
      </a>
    </footer>
  );
}
