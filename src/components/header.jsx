import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <header>
        <div className="header__inner">
          <Link to="/" className="logo__link">
            <img
              src="https://www.nicepng.com/png/full/948-9484754_crave-pizza-gif-pizza-pixel-art.png"
              className="logo__img"
            />
            <span>PIXELPIZZA</span>
          </Link>
          <ul className="cart">
            <Link to="/cart">
              <li className="cart-item">КОРЗИНА</li>
            </Link>
          </ul>
        </div>
      </header>
      <nav className="nav">
        <ul className="menu">
          <li
            onClick={() => setIndex(0)}
            className={index === 0 ? 'menu__item-focused' : ''}>
            Все
          </li>
          <li
            onClick={() => setIndex(1)}
            className={index === 1 ? 'menu__item-focused' : ''}>
            Мясные
          </li>
          <li
            onClick={() => setIndex(2)}
            className={index === 2 ? 'menu__item-focused' : ''}>
            Вегетерианская
          </li>
          <li
            onClick={() => setIndex(3)}
            className={index === 3 ? 'menu__item-focused' : ''}>
            Гриль
          </li>
          <li
            onClick={() => setIndex(4)}
            className={index === 4 ? 'menu__item-focused' : ''}>
            Острые
          </li>
          <li
            onClick={() => setIndex(5)}
            className={index === 5 ? 'menu__item-focused' : ''}>
            Закрытые
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
