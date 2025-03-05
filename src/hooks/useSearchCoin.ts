import { useEffect } from 'react';

export function useSearchCoin(key: string, action: () => void) {
  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };
    document.addEventListener('keydown', callback);

    // always add a cleanup function
    return () => {
      document.removeEventListener('keydown', callback);
    };
  }, [action, key]);
}
