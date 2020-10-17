import React, {useRef} from "react";
import "./searchPanelStyles.scss";


const SearchPanel = ({setSearch}) => {
    const inputEl = useRef(null);
    return (
        <div className="search-panel">
            <input type="text"
                   className="search-input"
                   placeholder="Search for a movie..."
                   ref={inputEl}
            />
            <button className="search-btn" onClick={() => setSearch(inputEl.current.value)}>Search</button>
        </div>
    );
}

export default SearchPanel;
