import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeDashboard from './pages/HomeDashboard';
import PageNotFound from './pages/PageNotFound';
import MyPortfolio from './pages/(logged-in)/MyPortfolio';
import CoinDetails from './pages/CoinDetails';
import CoingecoFooter from './components/ui/CoingecoFooter';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomeDashboard />} />
        <Route path="user/:id" element={<MyPortfolio />} />
        <Route path="coin/:tag" element={<CoinDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <CoingecoFooter />
    </>
  );
}

export default App;
