import React from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { fetchCoinInfo } from '../services/api';

export default function CoinDetails() {
  const order = useLoaderData();
  console.log(order);

  return <div>CoinDetails</div>;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const order = await fetchCoinInfo(
    import.meta.env.VITE_COINGECO_KEY,
    params.id!,
  );
  return order;
}
