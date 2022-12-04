import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <div className="header__inner">
          <Link to="/" className="logo__link">
            <div className="logo">
              <img
                src="https://www.nicepng.com/png/full/948-9484754_crave-pizza-gif-pizza-pixel-art.png"
                className="logo__img"
              />
              <span>PIXELPIZZA</span>
            </div>
          </Link>
          <ul className="cart">
            <Link to="/cart">
              <li className="cart-item">🛒</li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
