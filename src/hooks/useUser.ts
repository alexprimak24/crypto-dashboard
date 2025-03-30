import { useEffect, useState } from 'react';
import { getCurrentUser } from '../services/api/auth';
import { User } from '@supabase/supabase-js';

export function useUser() {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<{ user: User } | null>(null);
  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const loggedUser = await getCurrentUser();
        if (loggedUser) {
          setCurrentUser(loggedUser);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [setCurrentUser,setLoading]);

  return { currentUser, loading };
}
