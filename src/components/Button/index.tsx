import React from 'react';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width: number | string;
  color: string;
  height: number | string;
  fontSize: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, width, color, height, fontSize }) => {
  return (
    <button
      type="button"
      className={s.root}
      onClick={onClick}
      style={{
        width: `${width}`,
        background: `${color}`,
        height: `${height}`,
        fontSize: `${fontSize}`,
      }}>
      {children}
    </button>
  );
};

export default Button;
