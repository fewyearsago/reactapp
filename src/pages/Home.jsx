import React from 'react';
import Header from '../components/header';
import Pizzablock from '../components/pizza-block';
import Skeleton from '../components/skeleton';
import '../App.css';

function Home() {
  const [items, setItems] = React.useState([]);
  const [index, setIndex] = React.useState(0);
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
    <>
      <div className="categories">
        <ul className="menu">
          <li onClick={() => setIndex(0)} className={index === 0 ? 'menu__item' : ''}>
            Все
          </li>
          <li onClick={() => setIndex(1)} className={index === 1 ? 'menu__item' : ''}>
            Мясные
          </li>
          <li onClick={() => setIndex(2)} className={index === 2 ? 'menu__item' : ''}>
            Вегетерианская
          </li>
          <li onClick={() => setIndex(3)} className={index === 3 ? 'menu__item' : ''}>
            Гриль
          </li>
          <li onClick={() => setIndex(4)} className={index === 4 ? 'menu__item' : ''}>
            Острые
          </li>
          <li onClick={() => setIndex(5)} className={index === 5 ? 'menu__item' : ''}>
            Закрытые
          </li>
        </ul>
      </div>
      <div className="wrapper">
        {isLoader
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((elem) => (
              <Pizzablock title={elem.title} price={elem.price} imageUrl={elem.imageUrl} />
            ))}
      </div>
    </>
  );
}

export default Home;
