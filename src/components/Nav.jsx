import React from "react";
import { useHot } from "./AppContext";

function Nav() {
  const items = useHot();

  return (
    <div className="nav">
      <img className="logo" src="../logoThink.png" alt="logo" />
      <ul className="menu">
        <li className="menu__elem"><a href ="/hot" className="nav__item nav__item__red" color="#ed274a">Hot<img className="hot__icon" src="../burn.png" alt="burn" /></a></li>
        <li className="menu__elem"><a href ="/" className="nav__item nav__item__yellowgreen" color="#acfb6d">Regular</a></li>
      </ul>
    </div>
  );
}

export default Nav;
