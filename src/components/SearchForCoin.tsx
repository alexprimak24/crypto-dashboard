import React, { useRef } from 'react';
import { useKey } from '../hooks/useKey';

interface SearchForCoinProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
function SearchForCoin({ query, setQuery }: SearchForCoinProps) {
  const inputEl = useRef<HTMLInputElement | null>(null);

  //so on Enter press our search field will become active
  useKey('Enter', () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current?.focus();
    setQuery('');
  });
  return (
    <input
      className="h-8 w-5/6 self-center rounded-full border border-sky-400 px-2"
      type="text"
      placeholder="Search coin..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      //   so on enter press we will make that input active
      ref={inputEl}
    />
  );
}

export default SearchForCoin;
