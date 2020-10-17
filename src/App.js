import React, {useState} from "react";
import "./styles.scss";
import SearchPanel from "./components/searchPanel";
import MoviesList from "./components/moviesList";

const App = () => {
    const [search, setSearch] = useState("");
    return (
        <main>
            <SearchPanel setSearch={setSearch}/>
            <MoviesList search={search}/>
        </main>
    )
};

export default App;
