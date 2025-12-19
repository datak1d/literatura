import React from "react";
import s from "./Header.module.css"

const Header = ({ title, subtitle }) => {
  return (
    <header>
      <h1 className={`${s.title}`}>{title}</h1>
      <h2 className={`${s.background}`}>{subtitle}</h2>
    </header>
  );
};

export default Header;
