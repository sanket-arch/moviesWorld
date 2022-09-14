
import React from "react";

function movie(props) {
  return (
    <div className="movie-container">
      <img src={props.ImgUrl} alt={props.name} className="poster"/>
      <div className="movieDetails">
        <h4>{props.name}</h4>
        <h6>{props.year}</h6>
        <p>{props.Type}</p>
        
      </div>
    </div>
  );
}
export default movie;
