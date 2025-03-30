import { useEffect } from 'react';
import supabase from '../services/api/supabase';
import { useNavigate } from 'react-router-dom';
import { nameToUsername } from '../utils';

export default function RedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    async function handleRedirect() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user && user.user_metadata && user.user_metadata.full_name) {
        const loggedInUsername = user.user_metadata.full_name;

        const loggedInUsernameModified = nameToUsername(loggedInUsername);

        navigate(`/user/${loggedInUsernameModified}`);
      }
    }
    handleRedirect();
  }, [navigate]);

  return <div>Redirecting...</div>;
}
