import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
// import Header from "./components/Header/Header";
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductsList/ProductsList';
import Devices from './components/Devices/Devices'; 
import BundleDetails from './components/BundleDetails/BundleDetails';


function App() {
  const { tg } = useTelegram();
  const { onExpand } = useTelegram();

    useEffect(() => {
      tg.ready();
      onExpand();
  }, [tg, onExpand])

    return (
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route index element={< ProductList />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/bundle_details" element={<BundleDetails />} />
        </Routes>
      </div>
    );
}

export default App;
