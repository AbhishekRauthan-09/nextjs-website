import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white outline-none hover:opacity-85"
      {...props}
    >
      {children}
    </button>
  );
};


export default Button;
