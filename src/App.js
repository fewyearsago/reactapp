import React from 'react';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import './App.css';

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoader, setLoader] = React.useState(true);

  React.useEffect(() => {
    fetch('https://63853e02875ca3273d393b51.mockapi.io/items').then((res) =>
      res.json().then((arr) => {
        setItems(arr);
        setLoader(false);
      }),
    );
  }, []);

  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
