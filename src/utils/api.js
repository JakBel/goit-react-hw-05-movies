const API_KEY = "8cf48041f02f710cc4524470fa3eabaf";
const BASE_URL = "https://api.themoviedb.org/3/";

const fetchPopular = (setPopular) => {
  fetch(
    `${BASE_URL}trending/movie/week?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((popular) => setPopular(popular.results))
    .catch((e) => console.log(e));
};

const fetchMovie = (movieId, setMovie) => {
  fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((movie) => setMovie(movie))
    .catch((e) => console.log(e));
};

const fetchCast = (movieId, setCast) => {
  fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((movie) => setCast(movie.cast))
    .catch((e) => console.log(e));
};

const fetchReviews = (movieId, setReviews) => {
  fetch(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((movie) => setReviews(movie.results))
    .catch((e) => console.log(e));
};

const fetchByQuery = (query, setSearchedMovie) => {
  fetch(
    `${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((movie) => setSearchedMovie(movie.results))
    .catch((e) => console.log(e));
};

export { fetchPopular, fetchMovie, fetchCast, fetchReviews, fetchByQuery };
