import React from 'react';
import Pizzablock from '../components/pizza-block';
import Skeleton from '../components/skeleton';
import Pagination from '../components/pagination';
import Categories from '../components/categories';
import Sort from '../components/sort';
import '../App.css';

function Home({ searchvalue, setValue }) {
  const [items, setItems] = React.useState([]);
  const [isLoader, setLoader] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const search = searchvalue ? `&search=${searchvalue}` : '';

  React.useEffect(() => {
    setLoader(true);
    fetch(
      `https://63853e02875ca3273d393b51.mockapi.io/items?page=${currentPage}${search}&limit=3&`,
    ).then((res) =>
      res.json().then((arr) => {
        setItems(arr);
        setLoader(false);
      }),
    );
  }, [currentPage, searchvalue]);

  const pizzas = items.map((elem) => (
    <Pizzablock title={elem.title} price={elem.price} imageUrl={elem.imageUrl} />
  ));
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <div className="header__main">
        <Categories />
        <Sort />
      </div>
      <div className="wrapper">{isLoader ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
}

export default Home;
