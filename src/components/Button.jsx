import React from "react";

const Button = () => {
  const showNav = (e) => {
    console.log(e);
  };
  return (
    <button className="button" onClick={showNav}>
      Click Here
    </button>
  );
};

export default Button;
