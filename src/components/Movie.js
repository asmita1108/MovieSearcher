import React from "react";

const Movie = (props) => {
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          {props.image === null ? (
            <img
              src="Default.jpg"
              alt="Poster"
              style={{ width: "100%", height: 260 }}
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w185${props.image}`}
              alt="Poster"
              style={{ width: "100%", height: 260 }}
            />
          )}
        </div>
        <div className="card-content">
          <p>
            <a href="#/" onClick={() => props.viewMovieInfo(props.movieId)}>
              View Details
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
