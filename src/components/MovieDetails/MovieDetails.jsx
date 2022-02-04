import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./MovieDetails.module.css";

const MovieDetails = ({ movie }) => {
  const { id, title, overview, vote_average, genres, poster_path } = movie;
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className={styles.movieWrapper}>
      <button className={styles.button} onClick={goBack}>
        GO BACK
      </button>
      <div>
        {poster_path !== undefined ? (
          <img
            className={styles.poster}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`${title} movie poster`}
          />
        ) : (
          <p>Sorry, no poster available</p>
        )}
        <div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.votes}>User score: {vote_average * 10}%</p>
          <h2 className={styles.subtitle}>Overview</h2>
          <p className={styles.overview}>{overview}</p>
          <h2 className={styles.subtitle}>Genres</h2>
          <p className={styles.genres}>
            {genres?.map(({ name }) => name + ", ")}
          </p>
        </div>
      </div>
      <div>
        <h3 className={styles.subtitle}>Aditional information</h3>
        <ul className={styles.linkList}>
          <li className={styles.listItem}>
            <Link className={styles.link} to={`/movies/${id}/cast`}>
              Cast
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} to={`/movies/${id}/reviews`}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
