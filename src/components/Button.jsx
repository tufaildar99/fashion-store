import React from "react";

const Button = ({ children, className = "", type = "button" }) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};

export { Button };
