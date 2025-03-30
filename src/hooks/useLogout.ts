import { useCallback, useState } from 'react';
import { signOut } from '../services/api/auth';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(true);
  const logout = useCallback(async () => {
    setLoggingOut(true);
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.log(error);
    } finally {
      setLoggingOut(false);
    }
  }, []);

  return { logout, loggingOut };
}
