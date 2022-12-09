import React from 'react';

function Categories() {
  const [index, setIndex] = React.useState(0);
  return (
    <div className="categories__scroll">
      <ul className="menu">
        <li
          onClick={() => setIndex(0)}
          className={index === 0 ? 'menu__item' : ''}>
          Все
        </li>
        <li
          onClick={() => setIndex(1)}
          className={index === 1 ? 'menu__item' : ''}>
          Мясные
        </li>
        <li
          onClick={() => setIndex(2)}
          className={index === 2 ? 'menu__item' : ''}>
          Вегетерианская
        </li>
        <li
          onClick={() => setIndex(3)}
          className={index === 3 ? 'menu__item' : ''}>
          Гриль
        </li>
        <li
          onClick={() => setIndex(4)}
          className={index === 4 ? 'menu__item' : ''}>
          Острые
        </li>
        <li
          onClick={() => setIndex(5)}
          className={index === 5 ? 'menu__item' : ''}>
          Закрытые
        </li>
      </ul>
    </div>
  );
}

export default Categories;
