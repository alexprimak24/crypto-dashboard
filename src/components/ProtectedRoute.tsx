import { useNavigate, useParams } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';
import { useUser } from '../hooks/useUser';
import Loader from './ui/LoaderFullScreen';
import { nameToUsername } from '../utils';

// set up context later to be able to check if user is logged in
export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { userId } = useParams();
  console.log(userId);

  const { currentUser, loading } = useUser();

  useEffect(() => {
    if (
      (!loading && !currentUser) ||
      (currentUser &&
        nameToUsername(currentUser.user.user_metadata.name) !== userId)
    ) {
      navigate('/login');
    }
  });

  if (loading) return <Loader />;

  if (!currentUser) return null;

  return children;
}
