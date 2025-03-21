import { useEffect } from 'react';
import supabase from '../services/api/supabase';
import { useNavigate } from 'react-router-dom';

export default function RedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    async function handleRedirect() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      console.log('I am here' + user);
      if (user && user.user_metadata && user.user_metadata.full_name) {
        const loggedInUsername = user.user_metadata.full_name;

        const loggedInUsernameModified = loggedInUsername
          .toLowerCase()
          .replace(/\s+/g, '_');

        navigate(`/user/${loggedInUsernameModified}`);
      }
    }
    handleRedirect();
  }, [navigate]);

  return <div>Redirecting...</div>;
}
