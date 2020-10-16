import React, {useState} from "react";
import "./stylesMoviesList.scss"
import {useMovieService} from "../../context/moviesContext";
import Movie from "../movie";

const MoviesList = ({search}) => {
    const moviesService = useMovieService();
    const [movies, setMovies] = useState(moviesService.getInitialMovies());
    const likeMovie = (movieId) => (currentState) => () => {
        setMovies(movies => {
            const index = movies.findIndex(({id}) => movieId===id);
            return [...movies.slice(0, index), {...movies[index], isLiked: !currentState}, ...movies.slice(index + 1)]
        })
    }
    return (
        <ul className="movies-list">
            {movies
                .map(movie =>
                    <Movie movie={{...movie}}
                           like={likeMovie(movie.id)}
                    />)
            }
        </ul>
    )
}

export default MoviesList;
