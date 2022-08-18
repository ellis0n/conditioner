import React from "react";
import Button from "./Button";

const Nav = (props) => {
  const { pages } = props;

  return (
    <div className="nav">
      <Button />
      <div className="menu">
        <h1>Menu</h1>
        <ul>
          {pages.map((page) => (
            <li>{page.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
