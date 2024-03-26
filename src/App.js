import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from "./components/Header/Header";
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductsList/ProductsList';

function App() {
  const { tg } = useTelegram();
  const { onExpand } = useTelegram();

    useEffect(() => {
      tg.ready();
      onExpand();
  }, [tg, onExpand])

    return (
      <div className="App">
        <Header />
        <Routes>
          <Route index element={< ProductList />} />
        </Routes>
      </div>
    );
}

export default App;
