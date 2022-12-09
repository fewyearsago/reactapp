import React from 'react';
import Header from '../components/header';
import Pizzablock from '../components/pizza-block';
import Skeleton from '../components/skeleton';
import Pagination from '../components/pagination';
import '../App.css';

function Home({ searchvalue, setValue }) {
  const [items, setItems] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const [isLoader, setLoader] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    fetch(`https://63853e02875ca3273d393b51.mockapi.io/items?page=${currentPage}&limit=3&`).then(
      (res) =>
        res.json().then((arr) => {
          setItems(arr);
          setLoader(false);
        }),
    );
  }, [currentPage]);

  const pizzas = items
    .filter((elem) => {
      if (elem.title.toLowerCase().includes(searchvalue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((elem) => <Pizzablock title={elem.title} price={elem.price} imageUrl={elem.imageUrl} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <div className="categories">
        <div className="categories__scroll">
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
        <div className="sort">
          <div className="sort__label">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"></path>
            </svg>
            <h6>Сортировать по:</h6>
            <span className="sort__list">популярности</span>
          </div>
        </div>
      </div>
      <div className="wrapper">{isLoader ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
}

export default Home;
