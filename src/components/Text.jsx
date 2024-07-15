import React from "react";

const Text = ({ children, as, className = "" }) => {
  const Component = as || "p";
  return <Component className={className}>{children}</Component>;
};

export { Text };
