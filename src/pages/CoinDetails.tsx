import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { fetchCoinInfo } from '../services/coingeco';
import { CoinInfo } from '../services/coingeco/types';
import clsx from 'clsx';

export default function CoinDetails() {
  const {
    id,
    name,
    image,
    categories,
    description,
    market_data,
    market_cap_rank,
  }: CoinInfo = useLoaderData();

  const { current_price, price_change_percentage_24h } = market_data;

  return (
    <div className="mx-auto max-w-7xl rounded-lg bg-[#181818] p-8 text-gray-200 shadow-lg">
      <div className="flex items-center gap-4">
        <img
          src={image.small}
          alt={id}
          className="h-20 w-20 rounded-full border border-gray-700 object-cover"
        />
        <div>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold">{name}</h2>
            <span className="text-xl text-gray-400">#{market_cap_rank}</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xl text-indigo-400">
              ${current_price.usd}
            </span>
            <span
              className={clsx(
                'text-xl',
                price_change_percentage_24h < 0
                  ? 'text-red-500'
                  : 'text-green-500',
              )}
            >
              {price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="border-b border-gray-700 pb-2 text-2xl font-semibold">
          Categories
        </h4>
        <ul className="mt-4 flex flex-wrap gap-2">
          {categories.map((category: string) => (
            <li
              key={category}
              className="rounded-full bg-gray-700 px-4 py-2 text-sm text-gray-100"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h4 className="border-b border-gray-700 pb-2 text-2xl font-semibold">
          Description
        </h4>
        <p className="mt-4 leading-relaxed text-gray-300">{description?.en}</p>
      </div>
    </div>
  );
}

export async function loader({ params }: LoaderFunctionArgs) {
  const order = await fetchCoinInfo(
    import.meta.env.VITE_COINGECO_API,
    params.id!,
  );
  return order;
}
