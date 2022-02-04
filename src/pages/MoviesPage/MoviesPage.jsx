import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchByQuery } from "../../utils/api";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get("query");

  const searchMovies = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formQuery = form.elements.query.value;
    if (formQuery === "") {
      return;
    }
    setSearchQuery({ query: formQuery });
    fetchByQuery(query, setSearchedMovies);
    form.reset();
  };

  useEffect(() => {
    if (query === null) {
      setSearchedMovies([]);
      return;
    }
    fetchByQuery(query, setSearchedMovies);
  }, [query]);

  return (
    <div>
      <form onSubmit={searchMovies}>
        <input type="text" name="query"></input>
        <button type="submit">Search movies</button>
      </form>
      <ul>
        {searchedMovies.map(({ id, title }) => (
          <li className={styles.listed} key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
