import React from 'react';
import './ButtonViewAll.css';

const ButtonViewAll = ({ text, type = 'button', onClick }) => {
  return (
    <button className='btn' type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonViewAll;
