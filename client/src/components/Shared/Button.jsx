import React from 'react';
import '../../styles/button.scss';

const Button = ({ className, onClick, type, children }) => {

  const handleMouseOver = (event) => {
    const btn = event.currentTarget;
    const x = event.pageX - btn.offsetLeft;
    const y = event.pageY - btn.offsetTop;
    btn.style.setProperty("--xPos", x + "px");
    btn.style.setProperty("--yPos", y + "px");
  };

  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      onMouseOver={(event) => handleMouseOver(event)}
    >
     <span>
      {children}
     </span>
    </button>
  );
};

export default Button;