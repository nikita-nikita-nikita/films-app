import React from "react";
import "./stylesMovie.scss"

const Movie = ({movie:{image, title, isLiked = false, description, id}, like}) => {
    return (
        <li className="movie" key={id}>
            <img src={image} alt={title} width={130} height={130}/>
            <div className="main">
                <div className="head">
                    <h2>{title}</h2>
                    <button onClick={like(isLiked)} className={`like${isLiked ? ' liked' : ""}`}/>
                </div>
                <p>{description}</p>
            </div>
        </li>
    )
}

export default Movie;
