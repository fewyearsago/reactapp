import React from 'react';
import { Link } from 'react-router-dom';

function Header({ searchvalue, setValue }) {
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
              <span className="logo__title">PIXELPIZZA</span>
            </div>
          </Link>
          <div className="input__el">
            <input
              onChange={(e) => setValue(e.target.value)}
              value={searchvalue}
              placeholder="Введите что-нибудь"
              className="header__input"
            />
            {searchvalue && (
              <svg
                onClick={() => setValue('')}
                height="16"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg">
                <polygon
                  fillRule="evenodd"
                  points="8 9.414 3.707 13.707 2.293 12.293 6.586 8 2.293 3.707 3.707 2.293 8 6.586 12.293 2.293 13.707 3.707 9.414 8 13.707 12.293 12.293 13.707 8 9.414"
                />
              </svg>
            )}
          </div>
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
