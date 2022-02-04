import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.navBar}>
      <NavLink to="/" className={(styles.active, styles.home)}>
        Home
      </NavLink>
      <NavLink to="/movies" className={(styles.active, styles.movies)}>
        Movies
      </NavLink>
    </div>
  );
};

export default Menu;
