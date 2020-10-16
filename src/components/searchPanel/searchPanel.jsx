import React from "react";
import "./searchPanelStyles.scss";


const SearchPanel = () => {
    return (
        <div className="search-panel">
            <input type="text" className="search-input" placeholder="Search for a movie..."/>
            <button className="search-btn">Search</button>
        </div>
    );
}

export default SearchPanel;