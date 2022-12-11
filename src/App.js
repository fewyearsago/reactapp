import React from 'react';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import ReactPaginate from 'react-paginate';
import './App.css';

function App() {
  const [searchvalue, setValue] = React.useState('');

  return (
    <div className="container">
      <Header searchvalue={searchvalue} setValue={setValue}></Header>
      <Routes>
        <Route path="" element={<Home searchvalue={searchvalue} setValue={setValue} />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
