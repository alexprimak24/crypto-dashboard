import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeDashboard from './pages/HomeDashboard';
import PageNotFound from './pages/PageNotFound';
import MyPortfolio from './pages/(logged-in)/MyPortfolio';
import CoinDetails, { loader as coinDetailsLoader } from './pages/CoinDetails';
import Error from './components/ui/Error';
import AppLayout from './components/AppLayout';
// import { fetchCoinInfo } from './services/api';

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
  // async function a() {
  //   const data = await fetchCoinInfo(
  //     import.meta.env.VITE_COINGECO_KEY,
  //     'bitcoin',
  //   );
  //   console.log(data);
  // }
  // a();
  return <RouterProvider router={router} />;
}

export default App;
