import React from 'react';
import '../App.css';

function NotFound() {
  return (
    <div className="notfound">
      Корзина пустая 😕
      <p className="notfound__text">
        Вероятней всего, вы не заказывали ещё пиццу.
        <br /> Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img
        className="notfound__img"
        src="https://react-pizza-v2.vercel.app/static/media/empty-cart.db905d1f4b063162f25b.png"
        alt=""
      />
    </div>
  );
}

export default NotFound;
