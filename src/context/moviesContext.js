import React, {useContext} from "react";

const MoviesServiceContext = React.createContext();

export const useMovieService = () => useContext(MoviesServiceContext);

export default MoviesServiceContext;
