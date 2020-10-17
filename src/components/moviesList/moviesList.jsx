import React, {useState} from "react";
import "./stylesMoviesList.scss"
import {useMovieService} from "../../context/moviesContext";
import Movie from "../movie";

const MoviesList = ({search}) => {
    const moviesService = useMovieService();
    const [movies, setMovies] = useState(moviesService.getInitialMovies());
    const likeMovie = (movieId) => (currentState) => () => {
        setMovies(movies => {
            const index = movies.findIndex(({id}) => movieId === id);
            const newArr = [
                ...movies.slice(0, index),
                {...movies[index], isLiked: !currentState},
                ...movies.slice(index + 1)
            ];
            moviesService.saveToTheLocalStorage(newArr);
            return newArr;
        })
    }
    return (
        <ul className="movies-list">
            {
                movies.filter(movie => movie.isLiked)
                    .map(movie => <Movie like={likeMovie(movie.id)} movie={movie}/>)
            }
            {
                movies.filter(movie =>
                    !movie.isLiked &&
                    movie.title.toLowerCase().search(search.toLowerCase())!==-1)
                    .map(movie => <Movie like={likeMovie(movie.id)} movie={movie}/>)
            }
        </ul>
    )
}

export default MoviesList;
