import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
// import Header from "./components/Header/Header";
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductsList/ProductsList';
import Devices from './components/Devices/Devices'; // adjust the path as needed


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
        </Routes>
      </div>
    );
}

export default App;
