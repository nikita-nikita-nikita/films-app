import React from "react";
import "./styles.scss";
import SearchPanel from "./components/searchPanel";
import MoviesList from "./components/moviesList";

const App = () => {
    return (
        <main>
            <SearchPanel/>
            <MoviesList/>
        </main>
    )
};

export default App;