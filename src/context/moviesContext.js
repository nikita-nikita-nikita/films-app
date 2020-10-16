import React, {useContext} from "react";
import MovieService from "../services/movieService";

const MoviesServiceContext = React.createContext();

export const useMovieService = () => useContext(MoviesServiceContext);

export default MoviesServiceContext;