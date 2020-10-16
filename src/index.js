import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MoviesServiceContext from "./context/moviesContext";
import MovieService from "./services/movieService";

ReactDOM.render(
  <MoviesServiceContext.Provider value={new MovieService()}>
    <App />
  </MoviesServiceContext.Provider>,
  document.getElementById('root')
);

