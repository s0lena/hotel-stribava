import { useState } from 'react';
import './style.css';

export const OneRoom = ({ img, name, price, onSelect }) => {
  const handleSelect = () => {
    onSelect(name);
  };

  return (
    <div onClick={handleSelect} className="card">
      <img className="card__image" src={img} />
      <div className="card__title">{name}</div>
      <div className="card__body">{price} kč na osobu</div>
    </div>
  );
};
