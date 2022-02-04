import React, { useState, useEffect } from "react";
import PopularMoviesList from "../../components/PopularMoviesList/PopularMoviesList";
import { fetchPopular } from "../../utils/api";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular(setPopular);
  }, []);

  return (
    <div>
      <h1 className={styles.header}>Popular today</h1>
      <PopularMoviesList popular={popular} />
    </div>
  );
};

export default HomePage;
