import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeDashboard from './pages/HomeDashboard';
import PageNotFound from './pages/PageNotFound';
import MyPortfolio from './pages/(logged-in)/MyPortfolio';
import CoinDetails, { loader as coinDetailsLoader } from './pages/CoinDetails';
import Error from './components/ui/Error';
import AppLayout from './components/AppLayout';
// import { fetchCoinInfo } from './services/api';

// TODO
// 1.VALIDATE if the user enters the coin which doesn't exist
// 2. Add auth with Appwrite
// 2.1 Create form at the bottom with auth
// 2.2 Implement signup and login logic
// 2.3 Create Protected route to be forbidden to move to user profile without being auth
// 3. implement ability for the user to add coin to watchlist from coin info page
// 4. The same goes to Dashboard coin representation

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomeDashboard />,
      },
      {
        path: '/user/:id',
        element: <MyPortfolio />,
      },
      {
        path: '/coin/:id',
        element: <CoinDetails />,
        loader: coinDetailsLoader,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
