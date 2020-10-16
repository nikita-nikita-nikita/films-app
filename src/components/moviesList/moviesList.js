import React from "react";
import "./stylesMoviesList.scss"
import {useMovieService} from "../../context/moviesContext";
import Movie from "../movie";

const MoviesList = ({search}) => {
    const moviesService = useMovieService();
    return (
        <ul className="movies-list">
            <Movie movie={moviesService.getMovies()[0]}/>
        </ul>
    )
}

export default MoviesList;