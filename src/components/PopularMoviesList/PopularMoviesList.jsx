import React from "react";
import { Link } from "react-router-dom";
import styles from "./PopularMoviesList.module.css";

const PopularMoviesList = ({ popular }) => {
  return (
    <ul className={styles.list}>
      {popular.map((movie) => (
        <li className={styles.listItem} key={movie.id}>
          <Link className={styles.linked} to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PopularMoviesList;
