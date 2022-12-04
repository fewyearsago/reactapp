import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <header>
        <div className="header__inner">
          <div className="logo">
            <Link to="/" className="logo__link">
              <img
                src="https://www.nicepng.com/png/full/948-9484754_crave-pizza-gif-pizza-pixel-art.png"
                className="logo__img"
              />
            </Link>
            <span>PIXELPIZZA</span>
          </div>
          <ul className="cart">
            <Link to="/cart">
              <li className="cart-item">🛒</li>
            </Link>
          </ul>
        </div>
      </header>
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
    </>
  );
}

export default Header;
