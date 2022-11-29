import React from 'react';

function Header() {
  return (
    <header>
      <div className="header__inner">
        <a href="#" className="logo__link">
          <img
            src="https://www.nicepng.com/png/full/948-9484754_crave-pizza-gif-pizza-pixel-art.png"
            className="logo__img"
          />
          <span>PIXELPIZZA</span>
        </a>
        <ul className="menu">
          <li className="menu__item"></li>
          <li className="menu__item"></li>
          <li className="menu__item"></li>
          <li className="menu__item"></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
