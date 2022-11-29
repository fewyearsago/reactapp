import logo from './logo.svg';
import React from 'react';
import Pizzablock from './components/pizza-block';
import Header from './components/header';
import './App.css';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://63853e02875ca3273d393b51.mockapi.io/items').then((res) =>
      res.json().then((arr) => {
        setItems(arr);
      }),
    );
  }, []);

  return (
    <div className="container">
      <Header></Header>
      <div className="wrapper">
        {items.map(function (elem) {
          return (
            <Pizzablock name={elem.name} price={elem.price} url={elem.url} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
