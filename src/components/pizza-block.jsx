import React from 'react';

function pizzablock({ url, name, price }) {
  return (
    <div className="box">
      <img className="pizza-items" src={url} />
      <h2>{name}</h2>
      <p>{price}$</p>
    </div>
  );
}

export default pizzablock;
