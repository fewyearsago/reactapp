import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header__inner">
        <Link to="/" className="logo__link">
          <img
            src="https://www.nicepng.com/png/full/948-9484754_crave-pizza-gif-pizza-pixel-art.png"
            className="logo__img"
          />
          <span>PIXELPIZZA</span>
        </Link>
        <ul className="menu">
          <Link to="/cart">
            <li className="menu__item">КОРЗИНА</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
