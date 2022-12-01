import React, { useState } from 'react';

function Pizzablock({ imageUrl, title, price }) {
  const [counter, setCounter] = useState(0);

  function onClickAdd() {
    setCounter(counter + 1);
  }
  return (
    <div className="box">
      <img className="pizza-items" src={imageUrl} />
      <h2>{title}</h2>
      <p>{price}$</p>
      <a onClick={onClickAdd} className="btn">
        Добавить: {counter}
      </a>
    </div>
  );
}

export default Pizzablock;
