import React from 'react';

const CardWrapper = ({ children, className = "", ...props }) => {
  return (
    <div 
      className={`card-wrapper ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardWrapper;