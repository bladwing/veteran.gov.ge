import React from "react";
import { Link } from "react-router-dom";

import Logo from "../logo/Logo";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu-container">
      <Logo />
      <nav className="navMenu">
        <Link to="/">მთავარი</Link>
        <Link to="/organization">ორგანიზაცია</Link>
        <Link to="/news">სიახლეები</Link>
        <Link to="/media">მედია</Link>
        <Link to="/public-information">საჯარო ინფორმაცია</Link>
        <Link to="/contact">კონტაქტი</Link>
      </nav>
    </div>
  );
};

export default Menu;
