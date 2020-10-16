import React from "react";
import "./stylesMovie.scss"

const Movie = ({movie:{image, title, isLiked = false, description}}) => {
    return (
        <div className="movie">
            <img src={image} alt={title} width={130} height={130}/>
            <div className="main">
                <div className="head">
                    <h2>{title}</h2>
                    <div className={isLiked ? 'liked' : "" + 'like'}/>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Movie;