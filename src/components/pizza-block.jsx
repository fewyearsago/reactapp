import React, { useState } from 'react';

function Pizzablock({ imageUrl, title, price }) {
  const [counter, setCounter] = useState(0);
  return (
    <div className="box">
      <img className="pizza-items" src={imageUrl} />
      <h2>{title}</h2>
      <div className="box-item">
        <p>{price} руб.</p>
        <a onClick={() => setCounter(counter + 1)} className="btn">
          Добавить: <b>{counter}</b>
        </a>
      </div>
    </div>
  );
}

export default Pizzablock;
