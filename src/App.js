import React from 'react';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import './App.css';

export const SearchContext = React.createContext();

function App() {
  const [searchvalue, setValue] = React.useState('');

  return (
    <div className="container">
      <SearchContext.Provider value={{ searchvalue, setValue }}>
        <Header></Header>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
