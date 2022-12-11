import React from 'react';

function Categories({ value, onClickCategory }) {
  const arr = ['Все', 'Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div className="categories__scroll">
      <ul className="menu">
        {arr.map((categoryName, id) => (
          <li onClick={() => onClickCategory(id)} className={value === id ? 'menu__item' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
