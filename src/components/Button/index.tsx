import React from 'react';

import s from './Button.module.scss';
// import cn from "classnames";

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color: string;
  size: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, color, size }) => {
  return (
    <button
      type="button"
      className={s[size as keyof typeof s]}
      onClick={onClick}
      style={{
        background: color,
      }}>
      {children}
    </button>
  );
};

export default Button;
