import React from 'react';
// set up context later to be able to check if user is logged in
export default function ProtectedRoute() {
  //   const { isAuthenticated } = useAuth();
  //   const navigate = useNavigate();
  //   //remember that useEffect runs only after the dom painted everything
  //   // so that this won't work as browser tries to pain and gets an error
  //   // as use effect will run just after that
  //   useEffect(() => {
  //     if (!isAuthenticated) navigate('/');
  //   }, [isAuthenticated, navigate]);
  //   //this solves the problem I wrote above
  //   return isAuthenticated ? children : null;
  return <div>ProtectedRoute</div>;
}
