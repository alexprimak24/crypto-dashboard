import React, { useRef } from 'react';
import { useKey } from '../hooks/useKey';

interface SearchForCoinProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function SearchField({ query, setQuery }: SearchForCoinProps) {
  const inputEl = useRef<HTMLInputElement | null>(null);

  //so on Enter press our search field will become active
  useKey('Enter', () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current?.focus();
    setQuery('');
  });
  return (
    <input
      className="h-10 w-full rounded-full border border-sky-600 bg-[#242424] px-4 text-gray-200 placeholder-gray-500 transition focus:ring-2 focus:ring-sky-600 focus:outline-none"
      type="text"
      placeholder="Search coin..."
      value={query}
      aria-label=""
      onChange={(e) => setQuery(e.target.value)}
      //   so on enter press we will make that input active
      ref={inputEl}
    />
  );
}

export default SearchField;
