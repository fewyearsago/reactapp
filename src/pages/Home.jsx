import React from 'react';
import Header from '../components/header';
import Pizzablock from '../components/pizza-block';
import Skeleton from '../components/skeleton';
import '../App.css';

function Home() {
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
    <div className="wrapper">
      {isLoader
        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
        : items.map((elem) => (
            <Pizzablock title={elem.title} price={elem.price} imageUrl={elem.imageUrl} />
          ))}
    </div>
  );
}

export default Home;
